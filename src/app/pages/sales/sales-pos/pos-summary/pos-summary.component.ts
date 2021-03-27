import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SaleOrderCreateOutput } from '../../../../models/output/sale-order-create.output';
import { LoaderService } from '../../../../services/loader.service';
import { SaleOrderService } from '../../../../services/sale-order.service';
import { ToastService } from '../../../../services/toast.service';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-summary',
  templateUrl: './pos-summary.component.html',
  styleUrls: ['./pos-summary.component.scss']
})
export class PosSummaryComponent implements OnInit {

  @ViewChild('observation') public observationElement: ElementRef;

  constructor(
    public salesPosService: SalesPosService
  ) { }

  ngOnInit(): void { }

  public onInputObservation(): void {
    this.salesPosService.observation = this.observationElement.nativeElement.value;
  }

}
