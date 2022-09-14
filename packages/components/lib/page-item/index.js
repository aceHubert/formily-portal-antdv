"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageItem = void 0;
var vue_demi_1 = require("vue-demi");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
exports.PageItem = (0, vue_demi_1.defineComponent)({
    name: 'PageItem',
    props: {
        title: {},
        titleRight: {},
        titleUnderline: Boolean,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(configs_1.stylePrefix, "-page-item");
        var renderTitle = function () {
            var _a;
            var title = props.title, titleUnderline = props.titleUnderline, titleRight = props.titleRight;
            if (title) {
                return (0, vue_demi_1.h)('div', {
                    class: [
                        "".concat(prefixCls, "__title"),
                        (_a = {},
                            _a["".concat(prefixCls, "__title--underline")] = !!titleUnderline,
                            _a),
                    ],
                }, [
                    (0, vue_demi_1.h)('p', {
                        class: "".concat(prefixCls, "-title__text"),
                    }, (0, shared_1.resolveComponent)(title)),
                    titleRight &&
                        (0, vue_demi_1.h)('div', {
                            class: "".concat(prefixCls, "-title__right"),
                        }, [(0, shared_1.resolveComponent)(titleRight)]),
                ]);
            }
            return;
        };
        var renderContent = function () {
            var _a;
            return (0, vue_demi_1.h)('div', {
                class: "".concat(prefixCls, "__content"),
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
        return function () {
            return (0, vue_demi_1.h)('div', {
                class: [prefixCls],
            }, [renderTitle(), renderContent()]);
        };
    },
});
exports.default = exports.PageItem;
//# sourceMappingURL=index.js.map