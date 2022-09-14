"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContainer = void 0;
var vue_demi_1 = require("vue-demi");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
var useApi_1 = require("../page/useApi");
exports.PageContainer = (0, vue_demi_1.defineComponent)({
    name: 'PageContainer',
    props: {
        width: { type: [String, Number] },
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(configs_1.stylePrefix, "-page-container");
        return function () {
            var _a;
            var width = props.width;
            var style = {};
            if (width) {
                width !== 'fullwidth' && (style.width = (0, shared_1.parseStyleUnit)(width));
            }
            else {
                var containerWidth = (0, useApi_1.usePage)().containerWidth;
                style.width = containerWidth;
            }
            return (0, vue_demi_1.h)('div', {
                class: [prefixCls, width === 'fullwidth' && "".concat(prefixCls, "-fullwidth")],
                style: style,
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});
exports.default = exports.PageContainer;
//# sourceMappingURL=index.js.map