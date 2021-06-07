import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { SalesByDate } from '../models/api/sales-by-date';

@Injectable()
export class DashboardService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getSalesByDate(startDateOfIssue: string, endDateOfIssue: string): Observable<SalesByDate> {
        return this._http.get<SalesByDate>(`${URLS.api.dashboard}/salesByDate`, {
            params: HttpQueryParamsHelper.objectToParams({ startDateOfIssue, endDateOfIssue })
        });
    }
}