import { DialogMessagButton } from './dialog-message-button';

export interface DialogMessageOptions {
    message: string;
    title?: string;
    buttons?: DialogMessagButton[];
}