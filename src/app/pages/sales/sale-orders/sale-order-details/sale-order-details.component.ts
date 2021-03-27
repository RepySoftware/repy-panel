import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { removeObjectNulls } from '../../../../functions/remove-object-nulls';
import { SaleOrder } from '../../../../models/api/sale-order';

export interface SaleOrderDetailsInputData {
  saleOrder: SaleOrder;
}

@Component({
  selector: 'app-sale-order-details',
  templateUrl: './sale-order-details.component.html',
  styleUrls: ['./sale-order-details.component.scss']
})
export class SaleOrderDetailsComponent implements OnInit {

  public saleOrderJson: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public inputData: SaleOrderDetailsInputData
  ) {
    this.saleOrderJson = removeObjectNulls(this.inputData.saleOrder);
  }

  ngOnInit(): void {
  }

}
