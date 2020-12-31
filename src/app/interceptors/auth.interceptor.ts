import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private _storageService: StorageService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this._storageService.data) {
            const customReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${this._storageService.data.token}`)
            });

            return next.handle(customReq);
        } else {
            return next.handle(req);
        }
    }

}