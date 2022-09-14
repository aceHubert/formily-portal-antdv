/**
 * 置换样式单位
 */
export var parseStyleUnit = function (arg, unit) {
    if (unit === void 0) { unit = 'px'; }
    return typeof arg === 'number' ? "".concat(arg).concat(unit) : arg;
};
//# sourceMappingURL=unit.js.map