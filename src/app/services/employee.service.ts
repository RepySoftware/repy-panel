import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { EmployeeFilter } from '../models/output/filters/employee.filter';
import { Employee } from '../models/api/employee';
import { EmployeeCoordinates } from '../models/api/employee-coordinates';

@Injectable()
export class EmployeeService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll(filter: EmployeeFilter): Observable<Employee[]> {
        return this._http.get<Employee[]>(`${URLS.api.employees}`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }

    public getGeolocation(params: { employeesIds: number[] }): Observable<EmployeeCoordinates[]> {
        return this._http.get<EmployeeCoordinates[]>(`${URLS.api.employees}/geolocation`, {
            params: HttpQueryParamsHelper.objectToParams(params)
        });
    }
}