import type { RemoteDataSource } from '../__builtins__/shared';
import type { EntryItemProps } from './item';
export interface RemoteEntryDataSource extends RemoteDataSource {
}
export interface EntryProps {
    /**
     * 数据源
     * TODO: remote dataSource and dataMapper
     */
    dataSource: EntryItemProps[] | RemoteEntryDataSource;
    /**
     * 显示的列数
     */
    columns: number;
    /**
     * 显示的行数
     */
    rows?: number;
}
export declare const Entry: import("vue/types/v3-component-public-instance").ComponentPublicInstanceConstructor<import("vue/types/v3-component-public-instance").Vue3Instance<{}, Readonly<import("vue-demi").ExtractPropTypes<string[]>> | Readonly<import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {}, {
    [x: number]: string;
} | {}, true, import("vue/types/v3-component-options").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>> & Readonly<Readonly<import("vue-demi").ExtractPropTypes<string[]>> | Readonly<import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>> & import("vue-demi").ShallowUnwrapRef<{}> & import("vue/types/v3-component-options").ExtractComputedReturns<{}> & import("vue-demi").ComponentCustomProperties & Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, any, any, any, import("vue-demi").ComponentComputedOptions, import("vue-demi").ComponentMethodOptions> & import("vue/types/v3-component-options").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, {
    [x: number]: string;
} | {}> & {
    props: import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>;
} & {
    Item: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
        [x: number]: string;
    } | {}>;
};
export default Entry;
