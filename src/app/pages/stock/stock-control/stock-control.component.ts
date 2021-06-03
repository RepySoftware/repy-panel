import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyBranch } from '../../../models/api/company-brach';
import { Deposit } from '../../../models/api/deposit';
import { CompanyBranchService } from '../../../services/company-branch.service';
import { LoaderService } from '../../../services/loader.service';
import { StockService } from '../../../services/stock.service';
import { TitleService } from '../../../services/title.service';
import { ToastService } from '../../../services/toast.service';
import { StockPostsComponent, StockPostsInputData } from './stock-posts/stock-posts.component';

@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.scss']
})
export class StockControlComponent implements OnInit {

  public companyBranches: CompanyBranch[] = [];
  public deposits: Deposit[] = [];

  public companyBranchIdValue: number;

  constructor(
    private _title: TitleService,
    private _toast: ToastService,
    private _loader: LoaderService,
    private _stockService: StockService,
    private _companyBranchService: CompanyBranchService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._title.set('Controle de estoque');

    this.getCompanyBranches();
  }

  public getStockDeposits(options: { showLoader?: boolean } = {}): void {

    if (options?.showLoader)
      this._loader.show();

    this._stockService.getDeposits(Number(this.companyBranchIdValue)).subscribe(response => {

      if (options?.showLoader)
        this._loader.dismiss();

      this.deposits = response;

      console.log(response);
    }, error => {

      if (options?.showLoader)
        this._loader.dismiss();

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

  public openStockPosts(depositId: number): void {
    const data: StockPostsInputData = {
      depositId,
      companyBranchId: Number(this.companyBranchIdValue)
    };

    const dialog = this._dialog.open(StockPostsComponent, {
      width: '90%',
      height: '90%',
      data
    });

    dialog.afterClosed().subscribe(result => {
      this.getStockDeposits();
    });
  }
}
