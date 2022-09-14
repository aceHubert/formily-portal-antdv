"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStyleUnit = void 0;
/**
 * 置换样式单位
 */
var parseStyleUnit = function (arg, unit) {
    if (unit === void 0) { unit = 'px'; }
    return typeof arg === 'number' ? "".concat(arg).concat(unit) : arg;
};
exports.parseStyleUnit = parseStyleUnit;
//# sourceMappingURL=unit.js.map