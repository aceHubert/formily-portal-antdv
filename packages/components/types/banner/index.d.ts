import type { RemoteDataSource } from '../__builtins__/shared';
export interface BannerItem {
    key: string | number;
    imageUrl: string;
    linkUrl?: string;
}
export interface RemoteBannerDataSource extends RemoteDataSource {
}
export interface BannerProps {
    /**
     * 默认显示的dataSource中key的下标，默认：0
     */
    defaultKey?: BannerItem['key'];
    /**
     * 数据源
     * TODO: remote dataSource and dataMapper
     */
    dataSource: BannerItem[] | RemoteBannerDataSource;
    /**
     * 显示的高度(当不设置高度时以 img 标签渲染出图片实际调试，否则按背景平铺)
     */
    height?: string | number;
    /**
     * 自动播放，默认：dataSource.length > 1
     */
    autoplay?: boolean;
    /**
     * 自定义item class
     */
    itemClass: string;
}
export declare const Banner: import("vue-demi").DefineComponent<import("vue-demi").ComponentPropsOptions<import("vue-demi").Data>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue-demi").ExtractPropTypes<string[]> | import("vue-demi").ExtractPropTypes<import("vue/types/v3-component-props").ComponentObjectPropsOptions<import("vue-demi").Data>>>, {
    [x: number]: string;
} | {}>;
export default Banner;
