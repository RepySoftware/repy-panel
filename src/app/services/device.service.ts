import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/api/device';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { map } from 'rxjs/operators';

export enum DevicesGetStrategy {
    all = 'all',
    supplier = 'supplier',
    user = 'user'
}

@Injectable()
export class DeviceService {

    constructor(
        private _http: HttpClient
    ) {
    }

    private get(params: { strategy?: DevicesGetStrategy, supplierId?: number } = {}): Observable<Device[]> {
        return this._http.get<Device[]>(`${URLS.api.devices}`, {
            params: HttpQueryParamsHelper.objectToParams(params)
        });
    }

    public getDefault(): Observable<Device[]> {
        return this.get();
    }

    public getAll(): Observable<Device[]> {
        return this.get({ strategy: DevicesGetStrategy.all });
    }

    public getBySupplier(supplierId: number): Observable<Device[]> {
        return this.get({ strategy: DevicesGetStrategy.supplier, supplierId });
    }

    public getByUser(): Observable<Device[]> {
        return this.get({ strategy: DevicesGetStrategy.user });
    }

    public getByKey(deviceKey: string): Observable<Device> {
        return this._http.get<Device>(`${URLS.api.devices}/getByKey/${deviceKey}`);
    }
}