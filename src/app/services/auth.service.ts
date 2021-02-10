import { HttpClient } from '@angular/common/http';
import { LoginOutput } from '../models/output/login-output';
import { Observable } from 'rxjs';
import { UserToken } from '../models/api/user-token';
import { URLS } from './urls';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class AuthService {

    public isLogged = false;

    constructor(
        private _httpClient: HttpClient,
        private _storageService: StorageService
    ) {
        this._storageService.loadData();
        this.isLogged = Boolean(this._storageService.data && this._storageService.data.user && this._storageService.data.token);
    }

    public login(l: LoginOutput): Observable<void> {
        return new Observable(observer => {
            this._httpClient.post<UserToken>(`${URLS.api.auth}/login?strategy=manager`, l).subscribe(response => {
                this.saveIntoStorage(response);
                observer.next();
            }, error => {
                observer.error(error);
            });
        });
    }

    public logout(): Observable<void> {
        return new Observable(observer => {

            this._storageService.clearData();

            setTimeout(() => {
                observer.next();
            }, 1000);
        });
    }

    private saveIntoStorage(data: UserToken): void {

        if (!this._storageService.data)
            this._storageService.data = {};

        this._storageService.data.user = data.user;
        this._storageService.data.token = data.token;

        this._storageService.saveData();
    }

    public refresh(): Observable<UserToken> {
        return new Observable(observer => {

            if (!this._storageService.data)
                observer.error(new Error('Token inválido'));

            this._httpClient.post<UserToken>(`${URLS.api.auth}/refresh`, null, {
                headers: this.getAuthorizationHeaders()
            }).subscribe(response => {

                this._storageService.data = {
                    user: response.user,
                    token: response.token
                };

                this._storageService.saveData();

                observer.next(response);
            }, error => {
                observer.error(error);
            });
        });
    }

    public getAuthorizationHeaders(): any {
        return {
            Authorization: `Bearer ${this._storageService.data.token}`
        }
    }
}