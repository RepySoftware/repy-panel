import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseHelper } from '../helpers/http-response-helper';

@Injectable()
export class ToastService {

    private static DEFAULT_DURATION = 3000;

    private icons = {
        success: '✔ ',
        info: '',
        error: '❌ '
    }

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    public open(message: string, type: 'success' | 'info' | 'error' = 'info', duration: number = ToastService.DEFAULT_DURATION): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(`${this.icons[type]}${message}`, null, { duration });
    }

    public openWithAction(message: string, action: string, duration: number = ToastService.DEFAULT_DURATION): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, action, { duration });
    }

    public showHttpError(error: any, duration: number = ToastService.DEFAULT_DURATION): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(`${this.icons.error}${HttpResponseHelper.mapErrorResponse(error).message}`, null, { duration });
    }
}