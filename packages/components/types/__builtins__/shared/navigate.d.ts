/**
 * 绝对URL跳转
 * @param {string} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
export declare function absoluteGo(url: string, replace?: boolean): void;
export declare function isAbsoluteUrl(url: string): boolean;
/**
 * URL跳转
 * @param {Rawlocation} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
export declare function navigateTo(url: string, { replace, router }?: {
    replace?: boolean;
    router?: {
        go: Function;
        push: Function;
        replace: Function;
    };
}): void;
