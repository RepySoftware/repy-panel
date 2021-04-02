import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpResponseHelper } from '../helpers/http-response-helper';
import { DialogMessageOptions } from '../models/ui/dialog-message-options';
import { DialogMessageComponent } from '../shared/dialog-message/dialog-message.component';

@Injectable()
export class AlertMessageService {

    constructor(
        private _dialog: MatDialog
    ) { }

    public open(options: DialogMessageOptions): MatDialogRef<DialogMessageComponent> {
        return this._dialog.open(DialogMessageComponent, {
            data: options
        });
    }

    public showError(error: any): MatDialogRef<DialogMessageComponent> {
        return this._dialog.open(DialogMessageComponent, {
            data: {
                title: '❌ Erro',
                message: HttpResponseHelper.mapErrorResponse(error).message,
                buttons: [
                    {
                        text: 'Ok'
                    }
                ]
            } as DialogMessageOptions
        });
    }
}