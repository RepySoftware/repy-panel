import { MatDialogRef } from "@angular/material/dialog";
import { DialogMessageComponent } from "../../shared/dialog-message/dialog-message.component";

export interface DialogMessageButton {
    text: string;
    color?: string;
    closeOnClick?: boolean;
    onClick?: (dialogRef: MatDialogRef<DialogMessageComponent>) => void;
}