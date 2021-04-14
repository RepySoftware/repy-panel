import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { SaleOrderStatusList } from '../../../../enums/sale-order-status';
import { CompanyBranch } from '../../../../models/api/company-brach';
import { Employee } from '../../../../models/api/employee';
import { PaymentMethod } from '../../../../models/api/payment-method';
import { PersonSearch } from '../../../../models/api/person-search';
import { SaleOrder } from '../../../../models/api/sale-order';
import { EmployeeFilter } from '../../../../models/output/filters/employee.filter';
import { PersonSearchFilter } from '../../../../models/output/filters/person-search.filter';
import { SaleOrderUpdateOutput } from '../../../../models/output/sale-order-update.output';
import { AutocompleteItem } from '../../../../models/ui/autocomplete-item';
import { AutocompleteOptions } from '../../../../models/ui/autocomplete-options';
import { AlertMessageService } from '../../../../services/alert-message.service';
import { CompanyBranchService } from '../../../../services/company-branch.service';
import { EmployeeService } from '../../../../services/employee.service';
import { LoaderService } from '../../../../services/loader.service';
import { PaymentMethodService } from '../../../../services/payment-method.service';
import { PersonService } from '../../../../services/person.service';
import { SaleOrderService } from '../../../../services/sale-order.service';
import { ToastService } from '../../../../services/toast.service';
import { AutocompleteComponent } from '../../../../shared/autocomplete/autocomplete.component';
import { SaleOrderProductOptions } from '../../models/sale-order-product-options';
import { SaleOrderProductFormComponent, SaleOrderProductFormInputData } from './sale-order-product-form/sale-order-product-form.component';

export interface SaleOrderFormInputData {
  saleOrderId: number
}

@Component({
  selector: 'app-sale-order-form',
  templateUrl: './sale-order-form.component.html',
  styleUrls: ['./sale-order-form.component.scss']
})
export class SaleOrderFormComponent implements OnInit {

  @ViewChild('personCustomerAutocomplete') public personCustomerAutocomplete: AutocompleteComponent;
  @ViewChild('employeeDriverAutocomplete') public employeeDriverAutocomplete: AutocompleteComponent;

  public isModal: boolean;

  public saleOrderId: number;
  public saleOrder: SaleOrder;

  public companyBranches: CompanyBranch[] = [];
  public paymentMethods: PaymentMethod[] = [];

  public personCustomerSelected: PersonSearch;
  public products: SaleOrderProductOptions[] = [];
  public employeeDriverSelected: Employee;

  public saleOrderForm: FormGroup;

  public personCustomerAutocompleteOptions: AutocompleteOptions<PersonSearch> = {
    placeholder: 'Cliente',
    onGetItems: query => {

      const filter: PersonSearchFilter = {
        index: 0,
        limit: 8,
        q: query
      };

      return this._personService.search(filter).pipe(
        map(res => {
          return res.map(x => {
            return {
              label: `${x.name} (${x.id})`,
              value: x
            } as AutocompleteItem<PersonSearch>
          });
        })
      )
    },
    onSelectItem: item => {
      this.personCustomerSelected = item.value;
    },
    emitOnClear: true
  }

  public employeeDriverAutocompleteOptions: AutocompleteOptions<Employee> = {
    placeholder: 'Entregador',
    onGetItems: query => {

      const filter: EmployeeFilter = {
        index: 0,
        limit: 8,
        q: query
      };

      return this._employeeService.getAll(filter).pipe(
        map(res => {
          return res.map(x => {
            return {
              label: `${x.name}`,
              value: x
            } as AutocompleteItem<Employee>
          });
        })
      )
    },
    onSelectItem: item => {
      this.employeeDriverSelected = item.value;
    },
    emitOnClear: true
  }

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _personService: PersonService,
    private _companyBranchService: CompanyBranchService,
    private _employeeService: EmployeeService,
    private _paymentMethodService: PaymentMethodService,
    private _activatedRoute: ActivatedRoute,
    private _saleOrderService: SaleOrderService,
    private _dialog: MatDialog,
    private _dialogRef: MatDialogRef<SaleOrderFormComponent>,
    private _alert: AlertMessageService,
    @Inject(MAT_DIALOG_DATA) public inputData: SaleOrderFormInputData
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.saleOrderForm = new FormGroup({
      status: new FormControl(null, Validators.required),
      dateOfIssue: new FormControl(null, Validators.required),
      deliveredAt: new FormControl(null),
      companyBranch: new FormControl(null, Validators.required),
      deliverySchedule: new FormControl(null),
      paymentMethod: new FormControl(null, Validators.required),
      paymentInstallments: new FormControl(null, Validators.min(1)),
      observation: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.saleOrderId = this._activatedRoute.snapshot.params.personId || this.inputData.saleOrderId;

    this.isModal = !!this.inputData.saleOrderId;

    if (this.saleOrderId) {
      this.getSaleOrder().then(() => this.setFormValues());
    }

    this.getCompanyBranches();
    this.getPaymentMethods();
  }

  private setFormValues(): void {

    this.personCustomerSelected = {
      id: this.saleOrder.personCustomer.id,
      name: this.saleOrder.personCustomer.name,
      tradeName: this.saleOrder.personCustomer.tradeName,
      documentNumber: this.saleOrder.personCustomer.documentNumber,
      isSupplier: this.saleOrder.personCustomer.isSupplier,
      isCustomer: this.saleOrder.personCustomer.isCustomer,
      isGasCustomer: this.saleOrder.personCustomer.isGasCustomer,
      isActive: this.saleOrder.personCustomer.isActive,
      phones: this.saleOrder.personCustomer.phones?.map(x => x.phone),
      addressStreet: this.saleOrder.deliveryAddress.street,
      addressNumber: this.saleOrder.deliveryAddress.number,
      addressNeighborhood: this.saleOrder.deliveryAddress.neighborhood,
      addressCity: this.saleOrder.deliveryAddress.city,
      addressRegion: this.saleOrder.deliveryAddress.region,
      addressCountry: this.saleOrder.deliveryAddress.country,
      addressDescription: this.saleOrder.deliveryAddress.description,
      addressComplement: this.saleOrder.deliveryAddress.complement,
      addressReferencePoint: this.saleOrder.deliveryAddress.referencePoint
    };
    this.personCustomerAutocomplete.selectItem({
      label: `${this.personCustomerSelected.name} (${this.personCustomerSelected.id})`,
      value: this.personCustomerSelected
    });

    this.products = this.saleOrder.products.map(x => {
      return {
        id: x.id,
        companyBranchProduct: x.companyBranchProduct,
        price: x.companyBranchProductPrice,
        salePriceValue: x.salePrice,
        quantity: x.quantity
      }
    });

    if (this.saleOrder.employeeDriver) {
      this.employeeDriverSelected = this.saleOrder.employeeDriver;
      this.employeeDriverAutocomplete.selectItem({
        label: this.employeeDriverSelected.name,
        value: this.employeeDriverSelected
      });
    }

    this.saleOrderForm.get('status').setValue(this.saleOrder.status);
    this.saleOrderForm.get('dateOfIssue').setValue(moment(this.saleOrder.dateOfIssue).format('YYYY-MM-DDTHH:mm'));
    this.saleOrderForm.get('deliveredAt').setValue(this.saleOrder.deliveredAt ? moment(this.saleOrder.deliveredAt).format('YYYY-MM-DDTHH:mm') : null);
    this.saleOrderForm.get('companyBranch').setValue(this.saleOrder.companyBranch?.id);
    this.saleOrderForm.get('deliverySchedule').setValue(this.saleOrder.scheduledAt ? moment(this.saleOrder.scheduledAt).format('YYYY-MM-DDTHH:mm') : null);
    this.saleOrderForm.get('paymentMethod').setValue(this.saleOrder.paymentMethod?.id);
    this.saleOrderForm.get('paymentInstallments').setValue(this.saleOrder.paymentInstallments);
    this.saleOrderForm.get('observation').setValue(this.saleOrder.observation);
  }

  private getSaleOrder(): Promise<SaleOrder> {
    return new Promise((resolve, reject) => {
      this._loader.show();
      this._saleOrderService.getById(this.saleOrderId).subscribe(response => {
        this._loader.dismiss();
        this.saleOrder = response;
        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
      });
    });
  }

  private getCompanyBranches(): void {
    this._companyBranchService.getAll().subscribe(response => {
      this.companyBranches = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  private getPaymentMethods(): void {
    this._paymentMethodService.getAll().subscribe(response => {
      this.paymentMethods = response;
    }, error => {
      this._toast.showHttpError(error);
    });
  }

  public setFormFieldToNull(fieldName: string): void {
    this.saleOrderForm.get(fieldName).setValue(null);
  }

  public openProductForm(index?: number): void {

    const saleOrderProduct = index !== undefined && index !== null ? this.products[index] : null;
    const companyBranchId: number = this.saleOrderForm.get('companyBranch').value;

    if (!companyBranchId) {
      this._toast.open('Selecione uma unidade');
      throw new Error('Company branch not defined');
    }

    const dialog = this._dialog.open(SaleOrderProductFormComponent, {
      width: '45%',
      data: {
        companyBranchId,
        saleOrderProduct
      } as SaleOrderProductFormInputData
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.saleOrderProduct) {
        if (index !== undefined && index != null)
          this.products[index] = result.saleOrderProduct;
        else
          this.products.push(result.saleOrderProduct);
      }
    });
  }

  public removeProduct(index: number): void {

    const saleOrderProduct = this.products[index];

    this._alert.open({
      message: `Excluir produto <strong>${saleOrderProduct.companyBranchProduct.product.name}</strong>?`,
      buttons: [
        {
          text: 'Cancelar',
          color: 'basic'
        },
        {
          text: 'Excluir',
          color: 'warn',
          onClick: () => this.products.splice(index, 1)
        }
      ]
    });
  }

  public save(): void {

    if (!this.personCustomerSelected) {
      this._toast.open('Cliente não definido', 'error');
      throw new Error('Customer not defined');
    }

    if (!this.saleOrderForm.valid) {
      this._toast.open('Campos inválidos', 'error');
      this.saleOrderForm.markAllAsTouched();
      throw new Error('Invalid form');
    }

    const dateOfIssue = this.saleOrderForm.get('dateOfIssue').value;
    const deliverySchedule = this.saleOrderForm.get('deliverySchedule').value;
    const deliveredAt = this.saleOrderForm.get('deliveredAt').value;

    const saleOrderOutput: SaleOrderUpdateOutput = {
      id: this.saleOrder.id,
      status: this.saleOrderForm.get('status').value,
      companyBranchId: this.saleOrderForm.get('companyBranch').value,
      employeeDriverId: this.employeeDriverSelected?.id,
      personCustomerId: this.personCustomerSelected.id,
      paymentMethodId: this.saleOrderForm.get('paymentMethod').value,
      paymentInstallments: this.saleOrderForm.get('paymentInstallments').value,
      observation: this.saleOrderForm.get('observation').value,
      scheduledAt: deliverySchedule ? moment(deliverySchedule).toISOString() : null,
      dateOfIssue: dateOfIssue ? moment(dateOfIssue).toISOString() : null,
      deliveredAt: deliveredAt ? moment(deliveredAt).toISOString() : null,
      products: this.products.map(p => {
        return {
          id: p.id,
          companyBranchProductId: p.companyBranchProduct.id,
          companyBranchProductPriceId: p.price.id,
          quantity: p.quantity,
          salePrice: p.salePriceValue
        }
      })
    }

    this._loader.show();
    this._saleOrderService.update(saleOrderOutput).subscribe(response => {
      this._loader.dismiss();
      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    })
  }

  public get productsTotalPrice(): number {
    return this.products
      .map(p => p.quantity * p.salePriceValue)
      .reduce((a, b) => a + b, 0);
  }

  public get saleOrderStatusList(): string[] {
    return SaleOrderStatusList();
  }

  public get paymentMethodSelected(): PaymentMethod {
    return this.paymentMethods.find(x => x.id == this.saleOrderForm.get('paymentMethod').value);
  }
}
