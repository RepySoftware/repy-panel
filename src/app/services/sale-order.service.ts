import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { SaleOrderCreateOutput } from '../models/output/sale-order-create.output';
import { SaleOrder } from '../models/api/sale-order';
import { SaleOrderFilter } from '../models/output/filters/sale-order.filter';
import { SaleOrderConfirmDeliveryOutput } from '../models/output/sale-order-confirm-delivery.output';

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

    public updateIndex(items: { saleOrderId: number, index: number }[]): Observable<void> {
        return this._http.patch<void>(`${URLS.api.saleOrders}/updateIndex`, items);
    }

    public updateEmployeeDriver(params: { saleOrderId: number, employeeDriverId: number }): Observable<void> {
        return this._http.patch<void>(`${URLS.api.saleOrders}/updateEmployeeDriver`, params);
    }

    public confirmDelivery(params: SaleOrderConfirmDeliveryOutput): Observable<void> {
        return this._http.post<void>(`${URLS.api.saleOrders}/confirmDelivery`, params);
    }
}