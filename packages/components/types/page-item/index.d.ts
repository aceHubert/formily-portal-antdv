import type { Component } from 'vue-demi';
export interface PageItemProps {
    /**
     * 标题
     */
    title?: string | Component;
    /**
     * 标题下划线样式
     */
    titleUnderline?: boolean;
    /**
     * 标题右侧内容或组件
     */
    titleRight?: string | Component;
}
export declare const PageItem: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
    [x: number]: string;
} | {}>;
export default PageItem;
