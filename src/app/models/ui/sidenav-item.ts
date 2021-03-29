export interface SidenavMenu {
    title: string;
    icon?: string;
    route?: string;
    // showInToolbar?: boolean;
    onClick?: () => void;
    showCondition?: () => boolean;
    subMenus?: SidenavSubMenu[];
}

export interface SidenavSubMenu {
    title: string;
    icon?: string;
    route?: string;
    onClick?: () => void;
    showCondition?: () => boolean;
}