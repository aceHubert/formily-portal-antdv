export var hasSymbol = typeof Symbol === 'function' && Symbol.for;
export function isVnode(element) {
    return (element &&
        typeof element === 'object' &&
        'componentOptions' in element &&
        'context' in element &&
        element.tag !== undefined);
}
export function isVueOptions(options) {
    return (options &&
        (typeof options.template === 'string' ||
            typeof options.render === 'function'));
}
// eslint-disable-next-line @typescript-eslint/ban-types
export function composeExport(s0, s1) {
    return Object.assign(s0, s1);
}
export function isEmptyElement(c) {
    return !(c.tag || (c.text && c.text.trim() !== ''));
}
export function filterEmpty(children) {
    if (children === void 0) { children = []; }
    return children.filter(function (c) { return !isEmptyElement(c); });
}
export var inBrowser = typeof window !== 'undefined';
export function warn(condition, format) {
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
//# sourceMappingURL=utils.js.map