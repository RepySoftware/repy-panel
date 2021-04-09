import { Component, OnInit, Inject } from '@angular/core';
import { DialogMessageOptions } from 'src/app/models/ui/dialog-message-options';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMessageButton } from '../../models/ui/dialog-message-button';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.scss']
})
export class DialogMessageComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public options: DialogMessageOptions,
    private _dialogRef: MatDialogRef<DialogMessageComponent>,
    private _domSanitizer: DomSanitizer
  ) {
    if (!this.options.buttons)
      this.options.buttons = [];
  }

  ngOnInit() {
  }

  public onButtonClick(button: DialogMessageButton): void {

    if (button.closeOnClick === undefined || button.closeOnClick === true)
      this._dialogRef.close();

    if (button.onClick)
      button.onClick(this._dialogRef);
  }

  public get message(): SafeHtml {
    return this._domSanitizer.bypassSecurityTrustHtml(this.options.message);
  }
}
