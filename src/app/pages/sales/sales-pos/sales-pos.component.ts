import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../services/title.service';
import { SalesPosService } from './sales-pos.service';

export interface SalesPosTab {
  label: string;
  route: string;
  validator: () => boolean
}

@Component({
  selector: 'app-sales-pos',
  templateUrl: './sales-pos.component.html',
  styleUrls: ['./sales-pos.component.scss']
})
export class SalesPosComponent implements OnInit {

  public tabs: SalesPosTab[] = [
    {
      label: 'Cliente',
      route: '/sales/pos/customer',
      validator: () => this.salesPosService.tabsOk.customer()
    },
    {
      label: 'Produtos',
      route: '/sales/pos/products',
      validator: () => this.salesPosService.tabsOk.products()
    },
    {
      label: 'Entrega',
      route: '/sales/pos/delivery',
      validator: () => this.salesPosService.tabsOk.delivery()
    },
    {
      label: 'Pagamento',
      route: '/sales/pos/payment',
      validator: () => this.salesPosService.tabsOk.payment()
    },
    {
      label: 'Finalizar',
      route: '/sales/pos/summary',
      validator: () => false
    }
  ]

  constructor(
    public salesPosService: SalesPosService,
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('PDV');
  }

}
