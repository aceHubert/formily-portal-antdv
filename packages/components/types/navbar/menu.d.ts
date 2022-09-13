export interface MenuItem {
    key: string | number;
    text: string;
    linkUrl?: string;
    replace?: boolean;
    children?: Array<Omit<MenuItem, 'children'>>;
}
export interface RemoteNavMenuDataSource {
    url: string;
    mapper: Record<string, string>;
}
export interface NavMenuProps {
    dataSource: MenuItem[] | RemoteNavMenuDataSource;
    theme?: 'light' | 'dark';
    router?: any;
}
export declare const NavMenu: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
    [x: number]: string;
} | {}>;
export default NavMenu;
