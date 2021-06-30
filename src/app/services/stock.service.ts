import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpQueryParamsHelper } from "../helpers/filter-helper";
import { Deposit } from "../models/api/deposit";
import { StockPost } from "../models/api/stock-post";
import { DepositTransferOutput } from "../models/output/deposit-transfer.output";
import { StockPostFilter } from "../models/output/filters/stock-post.filter";
import { StockPostOutput } from "../models/output/stock-post.output";
import { URLS } from "./urls";

@Injectable()
export class StockService {

    constructor(
        private _http: HttpClient
    ) { }

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

    public depositTransfer(params: DepositTransferOutput[]): Observable<void> {
        return this._http.post<void>(`${URLS.api.stock}/depositTransfer`, params);
    }

    public clearDeposit(depositId: number): Observable<void> {
        return this._http.post<void>(`${URLS.api.stock}/deposits/clear`, { depositId });
    }

    public createPosts(params: StockPostOutput[]): Observable<StockPost[]> {
        return this._http.post<StockPost[]>(`${URLS.api.stock}/posts`, params);
    }

    public getPosts(filter: StockPostFilter): Observable<StockPost[]> {
        return this._http.get<StockPost[]>(`${URLS.api.stock}/posts`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }

    public deletePost(postId: number): Observable<void> {
        return this._http.delete<void>(`${URLS.api.stock}/posts/${postId}`);
    }
}