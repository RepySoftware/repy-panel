import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CompanyBranch } from '../../../../models/api/company-brach';
import { Deposit } from '../../../../models/api/deposit';
import { DepositOutput } from '../../../../models/output/deposit.output';
import { CompanyBranchService } from '../../../../services/company-branch.service';
import { DepositService } from '../../../../services/deposit.service';
import { LoaderService } from '../../../../services/loader.service';
import { ToastService } from '../../../../services/toast.service';

export interface DepositFormInputData {
  depositId?: number;
}

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.scss']
})
export class DepositFormComponent implements OnInit {

  public deposit: Deposit;
  public companyBranches: CompanyBranch[] = [];

  public depositForm: FormGroup;

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _depositService: DepositService,
    private _companyBranchService: CompanyBranchService,
    private _dialogRef: MatDialogRef<DepositFormComponent>,
    @Inject(MAT_DIALOG_DATA) public inputData: DepositFormInputData
  ) {
    this.initForm();
  }

  ngOnInit(): void {

    this.getCompanyBranches();

    if (this.inputData.depositId) {
      this.getDeposit().then(() => this.setFormValues());
    }
  }

  private initForm(): void {
    this.depositForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      companyBranch: new FormControl(null, Validators.required)
    });
  }

  private setFormValues(): void {
    this.depositForm.get('name').setValue(this.deposit.name);
    this.depositForm.get('companyBranch').setValue(this.deposit.companyBranch.id);
  }

  private getDeposit(): Promise<Deposit> {
    return new Promise((resolve, reject) => {
      this._loader.show();
      this._depositService.getById(this.inputData.depositId).subscribe(response => {
        this._loader.dismiss();
        this.deposit = response;
        resolve(response);
      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject(error);
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

  public save(): void {
    
    if (!this.depositForm.valid) {
      this.depositForm.markAllAsTouched();
      this._toast.open('Preencha todos os campos obrigatórios');
      throw new Error('Invalid form');
    }

    const depositOutput: DepositOutput = {
      name: this.depositForm.get('name').value,
      companyBranchId: this.depositForm.get('companyBranch').value
    }

    let apiCall: Observable<Deposit>;

    if (this.deposit) {
      depositOutput.id = this.deposit.id;
      apiCall = this._depositService.update(depositOutput);
    } else {
      apiCall = this._depositService.create(depositOutput);
    }

    this._loader.show();
    apiCall.subscribe(response => {
      this._loader.dismiss();
      this._toast.open('Salvo com sucesso!', 'success');

      this.deposit = response;

      this.initForm();
      this.setFormValues();

      this._dialogRef.close({ hasUpdate: true });
    }, error => {
      this._loader.dismiss();
      this._toast.showHttpError(error);
    });
  }

  public get isModal(): boolean {
    return !!this.inputData;
  }
}
