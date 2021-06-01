import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { EmployeeFilter } from '../models/output/filters/employee.filter';
import { Employee } from '../models/api/employee';
import { EmployeeCoordinates } from '../models/api/employee-coordinates';
import { EmployeeOutput } from '../models/output/employee.output';

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

    public getById(id: number): Observable<Employee> {
        return this._http.get<Employee>(`${URLS.api.employees}/${id}`);
    }

    public create(model: EmployeeOutput): Observable<Employee> {
        return this._http.post<Employee>(`${URLS.api.employees}`, model);
    }

    public update(model: EmployeeOutput): Observable<Employee> {
        return this._http.put<Employee>(`${URLS.api.employees}`, model);
    }

    public getGeolocation(params: { employeesIds: number[] }): Observable<EmployeeCoordinates[]> {
        return this._http.get<EmployeeCoordinates[]>(`${URLS.api.employees}/geolocation`, {
            params: HttpQueryParamsHelper.objectToParams(params)
        });
    }
}