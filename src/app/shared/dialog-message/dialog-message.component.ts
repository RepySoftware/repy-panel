import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogMessageOptions } from 'src/app/models/ui/dialog-message-options';
import { DialogMessagButton } from 'src/app/models/ui/dialog-message-button';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public options: DialogMessageOptions,
    private _dialogRef: MatDialogRef<DialogMessageComponent>
  ) {
    if (!this.options.buttons)
      this.options.buttons = [];
  }

  ngOnInit() {
  }

  public onButtonClick(button: DialogMessagButton): void {

    if (button.closeOnClick === undefined || button.closeOnClick === true)
      this._dialogRef.close();

    button.onClick();
  }
}
