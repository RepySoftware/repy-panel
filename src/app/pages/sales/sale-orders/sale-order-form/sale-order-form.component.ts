import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Moment } from 'moment';
import { CompanyBranch } from '../../../../models/api/company-brach';
import { Employee } from '../../../../models/api/employee';
import { PaymentMethod } from '../../../../models/api/payment-method';
import { Person } from '../../../../models/api/person';
import { SaleOrder } from '../../../../models/api/sale-order';
import { CompanyBranchService } from '../../../../services/company-branch.service';
import { EmployeeService } from '../../../../services/employee.service';
import { LoaderService } from '../../../../services/loader.service';
import { PaymentMethodService } from '../../../../services/payment-method.service';
import { PersonService } from '../../../../services/person.service';
import { SaleOrderService } from '../../../../services/sale-order.service';
import { ToastService } from '../../../../services/toast.service';
import { SalesPosPurchaseOrderProduct } from '../../models/sales-pos-purchase-order-item';

export interface SaleOrderFormInputData {
  saleOrderId: number
}

@Component({
  selector: 'app-sale-order-form',
  templateUrl: './sale-order-form.component.html',
  styleUrls: ['./sale-order-form.component.scss']
})
export class SaleOrderFormComponent implements OnInit {

  public isModal: boolean;

  public saleOrderId: number;
  public saleOrder: SaleOrder;

  public companyBranches: CompanyBranch[] = [];
  public paymentMethods: PaymentMethod[] = [];

  public personCustomer: Person;
  public products: SalesPosPurchaseOrderProduct[] = [];
  public companyBranch: CompanyBranch;
  public employeeDriver: Employee;
  public deliverySchedule: Moment;
  public paymentMethod: PaymentMethod;
  public paymentInstallments: number;
  public observation: string;

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _personService: PersonService,
    private _companyBranchService: CompanyBranchService,
    private _employeeService: EmployeeService,
    private _paymentMethodService: PaymentMethodService,
    private _activatedRoute: ActivatedRoute,
    private _saleOrderService: SaleOrderService,
    @Inject(MAT_DIALOG_DATA) public inputData: SaleOrderFormInputData
  ) { }

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
}
