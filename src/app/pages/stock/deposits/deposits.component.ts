import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Deposit } from '../../../models/api/deposit';
import { DepositService } from '../../../services/deposit.service';
import { LoaderService } from '../../../services/loader.service';
import { ToastService } from '../../../services/toast.service';
import { DepositFormComponent, DepositFormInputData } from './deposit-form/deposit-form.component';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent implements OnInit {

  public deposits: Deposit[] = [];

  public tableColumns: string[] = [
    'id',
    'name',
    'companyBranch',
    'options'
  ]

  constructor(
    private _loader: LoaderService,
    private _toast: ToastService,
    private _depositService: DepositService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDeposits();
  }

  private getDeposits(): Promise<void> {

    return new Promise((resolve, reject) => {
      this._loader.show();

      this._depositService.getAll().subscribe(response => {
        this._loader.dismiss();
        this.deposits = response;

        resolve();

      }, error => {
        this._loader.dismiss();
        this._toast.showHttpError(error);
        reject();
      })
    });
  }

  public openForm(depositId?: number): void {

    const data: DepositFormInputData = { depositId };

    const dialog = this._dialog.open(DepositFormComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      if (result && result.hasUpdate) {
        this.getDeposits();
      }
    });
  }

}
