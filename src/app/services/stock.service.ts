import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpQueryParamsHelper } from "../helpers/filter-helper";
import { Deposit } from "../models/api/deposit";
import { StockPost } from "../models/api/stock-post";
import { StockPostFilter } from "../models/output/filters/stock-post.filter";
import { StockPostOutput } from "../models/output/stock-post.output";
import { URLS } from "./urls";

@Injectable()
export class StockService {

    constructor(
        private _http: HttpClient
    ) { }

    public post(params: StockPostOutput): Observable<StockPost> {
        return this._http.post<StockPost>(`${URLS.api.stock}`, params);
    }

    public getDeposits(companyBranchId: number): Observable<Deposit[]> {
        return this._http.get<Deposit[]>(`${URLS.api.stock}/deposits`, {
            params: {
                companyBranchId: String(companyBranchId)
            }
        });
    }

    public getDepositById(depositId: number): Observable<Deposit> {
        return this._http.get<Deposit>(`${URLS.api.stock}/deposits/${depositId}`);
    }

    public getPosts(filter: StockPostFilter): Observable<StockPost[]> {
        return this._http.get<StockPost[]>(`${URLS.api.stock}/posts`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }
}