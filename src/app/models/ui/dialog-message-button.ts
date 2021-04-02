export interface DialogMessageButton {
    text: string;
    color?: string;
    closeOnClick?: boolean;
    onClick?: () => void;
}