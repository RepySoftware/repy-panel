import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URLS } from './urls';
import { HttpQueryParamsHelper } from '../helpers/filter-helper';
import { ProductFilter } from '../models/output/filters/product.filter';
import { CompanyBranchProduct } from '../models/api/company-branch-product';
import { RelatedProduct } from '../models/api/related-product';
import { Product } from '../models/api/product';
import { ProductCategory } from '../models/api/product-category';

@Injectable()
export class ProductService {

    constructor(
        private _http: HttpClient
    ) {
    }

    public getAllForSales(filter: ProductFilter, companyBranchId: number): Observable<CompanyBranchProduct[]> {
        return this._http.get<CompanyBranchProduct[]>(`${URLS.api.products}/sales`, {
            params: {
                ...HttpQueryParamsHelper.objectToParams(filter),
                companyBranchId: String(companyBranchId)
            }
        });
    }

    public getRelated(companyBranchProductId: number): Observable<RelatedProduct[]> {
        return this._http.get<RelatedProduct[]>(`${URLS.api.products}/${companyBranchProductId}/related`);
    }

    public getAll(filter: ProductFilter): Observable<Product[]> {
        return this._http.get<Product[]>(`${URLS.api.products}`, {
            params: HttpQueryParamsHelper.objectToParams(filter)
        });
    }

    public getById(id: number): Observable<Product> {
        return this._http.get<Product>(`${URLS.api.products}/${id}`);
    }

    public getCategories(): Observable<ProductCategory[]> {
        return this._http.get<ProductCategory[]>(`${URLS.api.products}/categories`);
    }
}