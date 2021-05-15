import { Injectable } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Moment } from "moment";
import { environment } from "../../../../environments/environment";
import { copyToClipboard } from "../../../functions/copy-to-clipboard";
import { AddressHelper } from "../../../helpers/address.helper";
import { CompanyBranch } from "../../../models/api/company-brach";
import { Employee } from "../../../models/api/employee";
import { PaymentMethod } from "../../../models/api/payment-method";
import { Person } from "../../../models/api/person";
import { PersonSearch } from "../../../models/api/person-search";
import { CompanyBranchService } from "../../../services/company-branch.service";
import { PaymentMethodService } from "../../../services/payment-method.service";
import { ToastService } from "../../../services/toast.service";
import { SaleOrderProductOptions } from "../models/sale-order-product-options";
import * as moment from 'moment';
import { SaleOrderCreateOutput } from "../../../models/output/sale-order-create.output";
import { LoaderService } from "../../../services/loader.service";
import { SaleOrderService } from "../../../services/sale-order.service";
import { Router } from "@angular/router";
import { SaleOrderPaymentOptions } from "../models/sale-order-payment-options";

@Injectable()
export class SalesPosService {

  constructor(
    private _sanitizer: DomSanitizer,
    private _toast: ToastService,
    private _paymentMethodService: PaymentMethodService,
    private _companyBranchService: CompanyBranchService,
    private _loader: LoaderService,
    private _saleOrderService: SaleOrderService,
    private _router: Router
  ) {
    this.getPaymentMethods();
    this.getCompanyBranches();
  }

  public persons: PersonSearch[] = [];
  public paymentMethods: PaymentMethod[] = [];
  public companyBranches: CompanyBranch[] = [];

  private _personCustomer: Person;
  public products: SaleOrderProductOptions[] = [];
  public companyBranch: CompanyBranch;
  public employeeDriver: Employee;
  public deliverySchedule: Moment;
  public payments: SaleOrderPaymentOptions[] = [];
  public observation: string;

  public tabsOk = {
    customer: () => !!this.personCustomer,
    products: () => this.products.length > 0,
    delivery: () => true,
    payment: () => !!this.companyBranch && this.products.length && (this.paymentsTotalPrice == this.productsTotalPrice)
  }

  public deliveryAddressMapUrl: SafeResourceUrl;

  private getPaymentMethods(): void {
    this._paymentMethodService.getAll().subscribe(response => {
      this.paymentMethods = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  private getCompanyBranches(): void {
    this._companyBranchService.getAll().subscribe(response => {
      this.companyBranches = response;

      // set default
      if (!this.companyBranch)
        this.companyBranch = this.companyBranches.find(cb => cb.isDefault);

    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public get personCustomer(): Person {
    return this._personCustomer;
  }

  public set personCustomer(value: Person) {
    this._personCustomer = value;
    this.deliveryAddressMapUrl = this.addressToMapUrl(this._personCustomer.address.description);
  }

  public get productsTotalPrice(): number {
    return this.products
      .map(p => p.quantity * p.salePriceValue)
      .reduce((a, b) => a + b, 0);
  }

  public get paymentsTotalPrice(): number {
    return this.payments
      .map(p => p.value)
      .reduce((a, b) => a + b, 0);
  }

  private addressToMapUrl(address: string): SafeResourceUrl {

    let url = `https://www.google.com/maps/embed/v1/search`;

    url += `?key=${environment.googleMaps.embedApiKey}`;
    url += `&q=${address}`;

    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public copyAddressLink(person: PersonSearch | Person): void {

    let addressStr: string;

    if ((person as PersonSearch).addressDescription) {
      const p = (person as PersonSearch);
      addressStr = AddressHelper.format(p);
    } else {
      const p = (person as Person);
      addressStr = AddressHelper.format(p.address);
    }

    const copyResult = copyToClipboard(addressStr);
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }

  public get deliveryScheduleFormatted(): string {
    return this.deliverySchedule.format('DD/MM/YYYY HH:mm');
  }

  public generateSaleOrder(): void {

    this.verifyErrors(true);

    const saleOrder: SaleOrderCreateOutput = {
      companyBranchId: this.companyBranch.id,
      employeeDriverId: this.employeeDriver ? this.employeeDriver.id : null,
      personCustomerId: this.personCustomer.id,
      payments: this.payments.map(p => {
        return {
          paymentMethodId: p.paymentMethod.id,
          value: p.value,
          dueDate: p.dueDate,
          payDate: p.payDate
        }
      }),
      observation: this.observation,
      scheduledAt: this.deliverySchedule ? moment(this.deliverySchedule).toISOString() : null,
      products: this.products.map(p => {
        return {
          companyBranchProductId: p.companyBranchProduct.id,
          companyBranchProductPriceId: p.price.id,
          quantity: p.quantity,
          salePrice: p.salePriceValue
        }
      })
    }

    this._loader.show();
    this._saleOrderService.create(saleOrder).subscribe(response => {
      this._loader.dismiss();
      this._toast.open(`Pedido #${response.id} gerado com sucesso`, 'success');
      this.reset();
      this._router.navigate(['/sales/pos']);
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  private verifyErrors(showToast: boolean = false): void {

    const errors: string[] = [];

    if (!this.companyBranch)
      errors.push('Unidade da empresa não definida');

    if (!this.personCustomer)
      errors.push('Cliente não definido');

    if (!this.products.length)
      errors.push('Nenhum produto definido');

    if (this.payments.length && this.productsTotalPrice != this.paymentsTotalPrice)
      errors.push('Valor de pagamento é diferente do valor total da venda');

    if (errors.length > 0) {

      if (showToast)
        this._toast.open(errors.join(' | '), 'error');

      throw new Error(errors.join(' | '));
    }
  }

  public reset(): void {
    this.getPaymentMethods();
    this.getCompanyBranches();

    this._personCustomer = null;
    this.products = [];
    this.employeeDriver = null;
    this.deliverySchedule = null;
    this.payments = [];
    this.deliveryAddressMapUrl = null;
    this.observation = null;
  }
}