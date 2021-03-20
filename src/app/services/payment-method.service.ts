import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { PaymentMethod } from '../models/api/payment-method';

@Injectable()
export class PaymentMethodService {

    constructor(
        private _http: HttpClient
    ) { }

    public getAll(): Observable<PaymentMethod[]> {
        return this._http.get<PaymentMethod[]>(`${URLS.api.paymentMethods}`);
    }
}