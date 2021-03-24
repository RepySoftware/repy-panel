import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { SaleOrderCreateOutput } from '../models/output/sale-order-create.output';
import { SaleOrder } from '../models/api/sale-order';

@Injectable()
export class SaleOrderService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public create(model: SaleOrderCreateOutput): Observable<SaleOrder> {
        return this._http.post<SaleOrder>(`${URLS.api.saleOrders}`, model);
    }
}