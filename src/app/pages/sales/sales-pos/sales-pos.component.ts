import { Component, OnInit } from '@angular/core';
import { SalesPosService } from './sales-pos.service';

@Component({
  selector: 'app-sales-pos',
  templateUrl: './sales-pos.component.html',
  styleUrls: ['./sales-pos.component.scss']
})
export class SalesPosComponent implements OnInit {

  constructor(
    public salesPosService: SalesPosService
  ) { }

  ngOnInit(): void {
  }

}
