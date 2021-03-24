import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { SaleOrderCreateOutput } from '../models/output/sale-order-create.output';
import { SaleOrder } from '../models/api/sale-order';
import { SaleOrderFilter } from '../models/output/filters/sale-order.filter';

@Injectable()
export class SaleOrderService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll(filter: SaleOrderFilter): Observable<SaleOrder[]> {
        return this._http.get<SaleOrder[]>(`${URLS.api.saleOrders}`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }

    public create(model: SaleOrderCreateOutput): Observable<SaleOrder> {
        return this._http.post<SaleOrder>(`${URLS.api.saleOrders}`, model);
    }
}