import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { SalesByDate } from '../models/api/sales-by-date';
import { PersonCustomerNextGasSaleFilter } from '../models/output/filters/person-customer-next-gas-sale.filter';
import { PersonCustomerNextGasSale } from '../models/api/person-customer-next-gas-sale';

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

    public getPersonsCustomersNextGasSales(params: PersonCustomerNextGasSaleFilter): Observable<PersonCustomerNextGasSale[]> {
        return this._http.get<PersonCustomerNextGasSale[]>(`${URLS.api.dashboard}/getPersonsCustomersNextGasSales`, {
            params: HttpQueryParamsHelper.objectToParams(params)
        });
    }
}