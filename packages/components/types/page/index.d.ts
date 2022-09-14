import type { Component } from 'vue-demi';
export interface PageProps {
    component?: string | Component;
    containerWidth?: string | number;
    themeVars?: Record<string, string>;
}
export declare const Page: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
    [x: number]: string;
} | {}>;
export default Page;
