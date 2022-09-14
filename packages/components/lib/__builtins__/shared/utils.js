"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = exports.inBrowser = exports.filterEmpty = exports.isEmptyElement = exports.composeExport = exports.isVueOptions = exports.isVnode = exports.hasSymbol = void 0;
exports.hasSymbol = typeof Symbol === 'function' && Symbol.for;
function isVnode(element) {
    return (element &&
        typeof element === 'object' &&
        'componentOptions' in element &&
        'context' in element &&
        element.tag !== undefined);
}
exports.isVnode = isVnode;
function isVueOptions(options) {
    return (options &&
        (typeof options.template === 'string' ||
            typeof options.render === 'function'));
}
exports.isVueOptions = isVueOptions;
// eslint-disable-next-line @typescript-eslint/ban-types
function composeExport(s0, s1) {
    return Object.assign(s0, s1);
}
exports.composeExport = composeExport;
function isEmptyElement(c) {
    return !(c.tag || (c.text && c.text.trim() !== ''));
}
exports.isEmptyElement = isEmptyElement;
function filterEmpty(children) {
    if (children === void 0) { children = []; }
    return children.filter(function (c) { return !isEmptyElement(c); });
}
exports.filterEmpty = filterEmpty;
exports.inBrowser = typeof window !== 'undefined';
function warn(condition, format) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' +
            'message argument');
    }
    if (!condition) {
        var argIndex_1 = 0;
        var message = '[@lj-portal/antdv]: ' +
            format.replace(/%s/g, function () {
                return args[argIndex_1++];
            });
        if (typeof console !== 'undefined') {
            // eslint-disable-next-line no-console
            console.error(message);
        }
    }
}
exports.warn = warn;
//# sourceMappingURL=utils.js.map