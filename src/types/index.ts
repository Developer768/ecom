export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?:SideNavItem[];
}

export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
}

export type apiReplyType = {
    error: String,
    message: String,
}