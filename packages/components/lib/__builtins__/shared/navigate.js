"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigateTo = exports.isAbsoluteUrl = exports.absoluteGo = void 0;
/**
 * 绝对URL跳转
 * @param {string} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
function absoluteGo(url, replace) {
    if (replace === void 0) { replace = false; }
    try {
        window.location[replace ? 'replace' : 'assign'](url);
    }
    catch (e) {
        window.location.href = url;
    }
}
exports.absoluteGo = absoluteGo;
// 判断是否是绝对路径
function isAbsoluteUrl(url) {
    return /^(https?:\/\/|\/\/)[\w.]+\/?/gi.test(url);
}
exports.isAbsoluteUrl = isAbsoluteUrl;
/**
 * URL跳转
 * @param {Rawlocation} url 目标URL
 * @param {boolean} replace 是否使用replace方式跳转
 */
function navigateTo(url, _a) {
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
exports.navigateTo = navigateTo;
//# sourceMappingURL=navigate.js.map