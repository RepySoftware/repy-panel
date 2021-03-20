import { Component, OnInit } from '@angular/core';
import { SalesPosService } from '../sales-pos.service';

@Component({
  selector: 'app-pos-summary',
  templateUrl: './pos-summary.component.html',
  styleUrls: ['./pos-summary.component.scss']
})
export class PosSummaryComponent implements OnInit {

  constructor(
    public salesPosService: SalesPosService
  ) { }

  ngOnInit(): void {
  }

}
