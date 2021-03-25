import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Moment } from "moment";
import { environment } from "../../../../environments/environment";
import { copyToClipboard } from "../../../functions/copy-to-clipboard";
import { CompanyBranch } from "../../../models/api/company-brach";
import { Employee } from "../../../models/api/employee";
import { PaymentMethod } from "../../../models/api/payment-method";
import { Person } from "../../../models/api/person";
import { PersonSearch } from "../../../models/api/person-search";
import { CompanyBranchService } from "../../../services/company-branch.service";
import { PaymentMethodService } from "../../../services/payment-method.service";
import { ToastService } from "../../../services/toast.service";
import { SalesPosPurchaseOrderProduct } from "../models/sales-pos-purchase-order-item";

@Injectable()
export class SalesPosService {

  constructor(
    private _sanitizer: DomSanitizer,
    private _toast: ToastService,
    private _paymentMethodService: PaymentMethodService,
    private _companyBranchService: CompanyBranchService
  ) {
    this.getPaymentMethods();
    this.getCompanyBranches();
  }

  public paymentMethods: PaymentMethod[] = [];
  public companyBranches: CompanyBranch[] = [];

  private _personCustomer: Person;
  public products: SalesPosPurchaseOrderProduct[] = [];
  public companyBranch: CompanyBranch;
  public employeeDriver: Employee;
  public deliverySchedule: Moment;
  public paymentMethod: PaymentMethod;
  public paymentInstallments: number;

  public tabsOk = {
    customer: () => !!this.personCustomer,
    products: () => this.products.length > 0,
    delivery: () => !!this.employeeDriver,
    payment: () => !!this.paymentMethod && !!this.companyBranch
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

  private addressToMapUrl(address: string): SafeResourceUrl {

    let url = `https://www.google.com/maps/embed/v1/search`;

    url += `?key=${environment.googleMaps.embedApiKey}`;
    url += `&q=${address}`;

    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public copyAddressLink(person: PersonSearch | Person): void {

    let addressLink: string;
    let addressComplete: string;

    if ((person as PersonSearch).addressDescription) {

      const p = (person as PersonSearch);

      addressLink = p.addressDescription;

      addressComplete = `${p.addressDescription}${p.addressComplement ? ' (compl:' + p.addressComplement + ')' : ''}${p.addressReferencePoint ? ' - ' + p.addressReferencePoint : ''}`;

    } else {

      const p = (person as Person);

      addressLink = p.address.description;

      addressComplete = `${p.address.description}${p.address.complement ? ' (compl:' + p.address.complement + ')' : ''}${p.address.referencePoint ? ' - ' + p.address.referencePoint : ''}`;

    }

    // const content = `https://www.google.com.br/maps?q=${encodeURI(addressLink)}\n${addressComplete}`;
    const content = addressComplete;

    const copyResult = copyToClipboard(content);
    if (copyResult)
      this._toast.open('Copiado para sua área de transferência!');
    else {
      this._toast.open('Erro ao copiar :(');
    }
  }

  public get deliveryScheduleFormatted(): string {
    return this.deliverySchedule.format('DD/MM/YYYY HH:mm');
  }

  public reset(): void {
    this.getPaymentMethods();
    this.getCompanyBranches();

    this._personCustomer = null;
    this.products = [];
    this.employeeDriver = null;
    this.deliverySchedule = null;
    this.paymentMethod = null;
    this.paymentInstallments = null;
    this.deliveryAddressMapUrl = null;
  }
}