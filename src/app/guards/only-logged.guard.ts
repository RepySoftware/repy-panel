import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { ToastService } from '../services/toast.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OnlyLoggedGuard implements CanActivate {

    constructor(
        private _storageService: StorageService,
        private _router: Router,
        private _toastService: ToastService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        this._storageService.loadData();

        if (this._storageService.data && this._storageService.data.user) {
            return true;
        } else {
            this._router.navigate(['/login']);
            this._toastService.open('Faça login para continuar');
            return false;
        }
    }

}