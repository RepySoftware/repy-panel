import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { DefaultDeliveryInstruction } from '../models/api/default-delivery-instruction';
import { DeliveryInstruction } from '../models/api/delivery-instruction';
import { DeliveryInstructionOutput } from '../models/output/delivery-instruction.output';

@Injectable()
export class DeliveryInstructionService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getDefault(): Observable<DefaultDeliveryInstruction[]> {
        return this._http.get<DefaultDeliveryInstruction[]>(`${URLS.api.deliveryInstructions}/default`);
    }

    public getById(id: number): Observable<DeliveryInstruction> {
        return this._http.get<DeliveryInstruction>(`${URLS.api.deliveryInstructions}/${id}`);
    }

    public create(params: DeliveryInstructionOutput): Observable<DeliveryInstruction> {
        return this._http.post<DeliveryInstruction>(`${URLS.api.deliveryInstructions}`, params);
    }
}