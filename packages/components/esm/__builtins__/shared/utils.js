export var hasSymbol = typeof Symbol === 'function' && Symbol.for;
export function isVnode(element) {
    return (element &&
        typeof element === 'object' &&
        'componentOptions' in element &&
        'context' in element &&
        element.tag !== undefined);
}
export function isVueOptions(options) {
    return options && (typeof options.template === 'string' || typeof options.render === 'function');
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
//# sourceMappingURL=utils.js.map