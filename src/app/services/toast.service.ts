import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ToastService {

    constructor(
        private _snackBar: MatSnackBar
    ) { }

    public open(message: string, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, null, { duration });
    }

    public openWithAction(message: string, action: string, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(message, action, { duration });
    }

    public showError(error: any, duration: number = 3000): MatSnackBarRef<SimpleSnackBar> {
        return this._snackBar.open(new HttpErrorResponse(error).message, null, { duration });
    }
}