import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { DashboardService } from '../../services/dashboard.service';
import * as moment from 'moment';
import { Product } from '../../models/api/product';
import { SalesByDate } from '../../models/api/sales-by-date';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public salesToday: SalesByDate;

  public today = moment().format('YYYY-MM-DD');

  constructor(
    private _dashboardService: DashboardService
  ) { }

  ngOnInit() {

    const startDate = moment().startOf('day').toISOString();
    const endDate = moment().endOf('day').toISOString();

    this._dashboardService.getSalesByDate(startDate, endDate, 1).subscribe(response => {

      this.salesToday = response;
      this.salesToday.items = this.salesToday.items.sort((a, b) => b.quantityIssued - a.quantityIssued);
    });
  }
}
