import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(
    private _title: TitleService
  ) { }

  ngOnInit(): void {
    this._title.set('Pedidos de Venda');
  }

}
