/**
 * 绝对URL跳转
 * @param {string} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
export function absoluteGo(url, replace) {
    if (replace === void 0) { replace = false; }
    try {
        window.location[replace ? 'replace' : 'assign'](url);
    }
    catch (e) {
        window.location.href = url;
    }
}
// 判断是否是绝对路径
export function isAbsoluteUrl(url) {
    return /^(https?:\/\/|\/\/)[\w.]+\/?/gi.test(url);
}
/**
 * URL跳转
 * @param {Rawlocation} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
export function navigateTo(url, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.replace, replace = _c === void 0 ? false : _c, router = _b.router;
    if (!url) {
        throw new Error('invalid url');
    }
    var isStringUrl = typeof url === 'string';
    if (isStringUrl) {
        // prevent goTo('javascript?')
        if (/^javas/.test(url)) {
            return;
        }
        if (url === 'BACK') {
            router === null || router === void 0 ? void 0 : router.go(-1);
            return;
        }
        if (isAbsoluteUrl(url)) {
            return absoluteGo(url, replace);
        }
    }
    router === null || router === void 0 ? void 0 : router[replace ? 'replace' : 'push'](url);
}
//# sourceMappingURL=navigate.js.map