export interface SidenavItem {
    title: string;
    icon?: string;
    route?: string;
    showInToolbar?: boolean;
    onClick?: () => void;
    showCondition?: () => boolean;
}