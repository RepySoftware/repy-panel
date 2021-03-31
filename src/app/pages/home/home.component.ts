import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { DashboardService } from '../../services/dashboard.service';
import * as moment from 'moment';
import { Product } from '../../models/api/product';
import { SalesByDay } from '../../models/api/sales-by-day';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public salesToday: SalesByDay;

  public today = moment().format('YYYY-MM-DD');

  constructor(
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {

    this._dashboardService.getSalesByDay(this.today, 1).subscribe(response => {

      this.salesToday = response;
      this.salesToday.items = this.salesToday.items.sort((a, b) => b.quantity - a.quantity);
    });
  }
}
