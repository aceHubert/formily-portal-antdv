import type { Component } from 'vue-demi';
export interface EntryItemProps {
    /**
     * icon, png|jpg 以img标签渲染
     */
    icon: string | Component;
    /**
     * text
     */
    text: string | Component;
    /**
     * 打开链接
     */
    linkUrl?: string;
    /**
     * 链接打开方式
     */
    blank?: boolean;
}
export declare type onClick = (item: EntryItemProps) => void;
export declare const EntryItem: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
    [x: number]: string;
} | {}>;
export default EntryItem;
