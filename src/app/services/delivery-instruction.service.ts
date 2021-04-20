import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { DeliveryInstruction } from '../models/api/delivery-instruction';

@Injectable()
export class DeliveryInstructionService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll(): Observable<DeliveryInstruction[]> {
        return this._http.get<DeliveryInstruction[]>(`${URLS.api.deliveryInstructions}`);
    }

}