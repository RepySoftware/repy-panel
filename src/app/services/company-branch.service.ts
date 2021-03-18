import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { CompanyBranch } from '../models/api/company-brach';

@Injectable()
export class CompanyBranchService {

    constructor(
        private _http: HttpClient
    ) { }

    public getAll(): Observable<CompanyBranch[]> {
        return this._http.get<CompanyBranch[]>(`${URLS.api.companyBranches}`);
    }
}