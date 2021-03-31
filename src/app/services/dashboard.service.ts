import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { Product } from '../models/api/product';
import { SalesByDay } from '../models/api/sales-by-day';

@Injectable()
export class DashboardService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getSalesByDay(date: string, companyBranchId: number): Observable<SalesByDay> {
        return this._http.get<SalesByDay>(`${URLS.api.dashboard}/salesByDay`, {
            params: HttpQueryParamsHelper.objectToParams({ date, companyBranchId })
        });
    }
}