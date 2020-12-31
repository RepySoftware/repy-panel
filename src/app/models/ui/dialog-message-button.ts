export interface DialogMessagButton {
    text: string;
    color?: string;
    closeOnClick?: boolean;
    onClick: () => void;
}