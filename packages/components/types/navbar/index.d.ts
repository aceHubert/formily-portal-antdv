import type { Component } from 'vue-demi';
export interface NavProps {
    /**
     * logo
     */
    logo?: string | Component;
    /**
     * left container component, logo 会被忽略如果设置 left
     */
    left?: string | Component;
    /**
     * right container component,
     */
    right?: string | Component;
    /**
     * fixed to top
     */
    fixed?: boolean;
    /**
     * fixed 占位
     */
    placeholder?: boolean;
    /**
     * height, 默认： 68px
     */
    height?: string | number;
    /**
     * content 内容对齐方式，默认：left
     */
    contentAlign: 'left' | 'right';
}
export declare const Navbar: import("vue/types/v3-component-public-instance").ComponentPublicInstanceConstructor<import("vue/types/v3-component-public-instance").Vue3Instance<{}, Readonly<import("vue-demi").ExtractPropTypes<string[]>> | Readonly<import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {}, {
    [x: number]: string;
} | {}, true, import("vue/types/v3-component-options").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>> & Readonly<Readonly<import("vue-demi").ExtractPropTypes<string[]>> | Readonly<import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>> & import("vue-demi").ShallowUnwrapRef<{}> & import("vue/types/v3-component-options").ExtractComputedReturns<{}> & import("vue-demi").ComponentCustomProperties & Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, any, any, any, import("vue-demi").ComponentComputedOptions, import("vue-demi").ComponentMethodOptions> & import("vue/types/v3-component-options").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, {
    [x: number]: string;
} | {}> & {
    props: import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>;
} & {
    Menu: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
        [x: number]: string;
    } | {}>;
};
export default Navbar;
