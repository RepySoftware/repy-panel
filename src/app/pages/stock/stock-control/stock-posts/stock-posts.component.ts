import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Deposit } from '../../../../models/api/deposit';
import { StockPost } from '../../../../models/api/stock-post';
import { StockPostFilter } from '../../../../models/output/filters/stock-post.filter';
import { DepositService } from '../../../../services/deposit.service';
import { LoaderService } from '../../../../services/loader.service';
import { StockService } from '../../../../services/stock.service';
import { ToastService } from '../../../../services/toast.service';

export interface StockPostsInputData {
  depositId: number;
}

@Component({
  selector: 'app-stock-posts',
  templateUrl: './stock-posts.component.html',
  styleUrls: ['./stock-posts.component.scss']
})
export class StockPostsComponent implements OnInit {

  public deposit: Deposit;
  public stockPosts: StockPost[] = [];

  public filter: StockPostFilter;

  public tableColumns: string[] = [
    'product',
    'type',
    'quantity',
    'observation',
    'createdAt'
  ]

  constructor(
    private _toast: ToastService,
    private _loader: LoaderService,
    private _stockService: StockService,
    @Inject(MAT_DIALOG_DATA) public inputData: StockPostsInputData
  ) {
    this.filter = {
      index: 0,
      limit: 40,
      depositId: inputData.depositId
    }
  }

  ngOnInit(): void {

    this._loader.show();

    Promise.all([
      this.getDeposit(),
      this.getPosts()
    ]).then(() => this._loader.dismiss())
      .catch(() => this._loader.dismiss());
  }

  private getDeposit(options: { showLoader?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {

      if (options?.showLoader)
        this._loader.show();

      this._stockService.getDepositById(this.inputData.depositId).subscribe(response => {

        if (options?.showLoader)
          this._loader.dismiss();

        this.deposit = response;

        resolve();
      }, error => {

        if (options?.showLoader)
          this._loader.dismiss();

        this._toast.showHttpError(error);

        reject();
      });
    });
  }

  private getPosts(options: { showLoader?: boolean } = {}): Promise<void> {

    return new Promise((resolve, reject) => {

      if (options?.showLoader)
        this._loader.show();

      this._stockService.getPosts(this.filter).subscribe(response => {

        if (options?.showLoader)
          this._loader.dismiss();

        this.stockPosts = response;

        resolve();
      }, error => {

        if (options?.showLoader)
          this._loader.dismiss();

        this._toast.showHttpError(error);

        reject();
      });
    });
  }
}
