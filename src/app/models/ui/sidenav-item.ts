export interface SidenavItem {
    title: string;
    icon?: string;
    route?: string;
    onClick?: () => void;
    showCondition?: () => boolean;
}