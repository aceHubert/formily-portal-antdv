"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlContent = void 0;
var vue_demi_1 = require("vue-demi");
var configs_1 = require("../__builtins__/configs");
exports.HtmlContent = (0, vue_demi_1.defineComponent)({
    name: 'Html',
    props: {
        content: String,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(configs_1.stylePrefix, "-html");
        return function () {
            var content = props.content ||
                (function () {
                    var _a;
                    // child is a string
                    var def = (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots);
                    if (typeof def === 'string') {
                        return def;
                    }
                    return '';
                })();
            return (0, vue_demi_1.h)('div', {
                class: [prefixCls],
                domProps: {
                    innerHTML: content,
                },
            }, []);
        };
    },
});
exports.default = exports.HtmlContent;
//# sourceMappingURL=index.js.map