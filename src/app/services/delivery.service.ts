import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { DeliveryFinalizeOutput } from '../models/output/delivery-finalize.output';
import { Delivery } from '../models/api/delivery';
import { DeliveryType } from '../enums/delivery-type';

@Injectable()
export class DeliveryService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public get(): Observable<Delivery[]> {
        return this._http.get<Delivery[]>(`${URLS.api.deliveries}`, {
            params: {
                strategy: 'agent'
            }
        });
    }

    public finalize(params: DeliveryFinalizeOutput, type: DeliveryType): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/finalize`, params, {
            params: { strategy: type }
        });
    }

    public start(id: number, type: DeliveryType): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/start`, { id }, {
            params: { strategy: type }
        });
    }

    public updateIndex(items: { id: number, index: number, type: DeliveryType }[]): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/updateIndex`, items);
    }

    public updateEmployeeDriver(params: { saleOrderId: number, employeeDriverId: number, firstPosition: boolean }): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/updateEmployeeDriver`, params);
    }

    public updateShowObservationToDriver(params: { saleOrderId: number, value: boolean }): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/updateShowObservationToDriver`, params);
    }

    public approve(saleOrderId: number): Observable<void> {
        return this._http.patch<void>(`${URLS.api.deliveries}/approve`, { saleOrderId });
    }
}