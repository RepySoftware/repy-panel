import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Deposit } from "../models/api/deposit";
import { DepositOutput } from "../models/output/deposit.output";
import { URLS } from "./urls";

@Injectable()
export class DepositService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAll(): Observable<Deposit[]> {
        return this._http.get<Deposit[]>(`${URLS.api.deposits}`);
    }

    public getById(id: number): Observable<Deposit> {
        return this._http.get<Deposit>(`${URLS.api.deposits}/${id}`);
    }

    public create(model: DepositOutput): Observable<Deposit> {
        return this._http.post<Deposit>(`${URLS.api.deposits}`, model);
    }

    public update(model: DepositOutput): Observable<Deposit> {
        return this._http.put<Deposit>(`${URLS.api.deposits}`, model);
    }
}