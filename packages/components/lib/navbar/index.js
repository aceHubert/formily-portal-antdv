"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var vue_demi_1 = require("vue-demi");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
var useApi_1 = require("../page/useApi");
var menu_1 = require("./menu");
var Nav = (0, vue_demi_1.defineComponent)({
    name: 'Navbar',
    props: {
        logo: [String, Object],
        left: {},
        right: {},
        fixed: Boolean,
        placeholder: Boolean,
        height: [String, Number],
        contentAlign: {
            type: String,
            validator: function (value) {
                return ['left', 'right'].includes(value);
            },
        },
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(configs_1.stylePrefix, "-nav");
        var containerWidth = (0, useApi_1.usePage)().containerWidth;
        return function () {
            var _a;
            var logo = props.logo, height = props.height, left = props.left, right = props.right, _b = props.placeholder, placeholder = _b === void 0 ? false : _b, _c = props.fixed, fixed = _c === void 0 ? false : _c, _d = props.contentAlign, contentAlign = _d === void 0 ? 'left' : _d;
            var style = {};
            var placeholderStyle = {};
            if (height) {
                style.height = (0, shared_1.parseStyleUnit)(height);
                placeholderStyle.height = (0, shared_1.parseStyleUnit)(height);
            }
            var renderLeft = function () {
                if (logo) {
                    return (0, vue_demi_1.h)('div', {
                        class: ["".concat(prefixCls, "-content__left")],
                    }, [
                        typeof props.logo === 'string'
                            ? (0, vue_demi_1.h)('img', {
                                class: "".concat(prefixCls, "-logo"),
                                domProps: {
                                    src: props.logo,
                                    alt: 'logo',
                                },
                            })
                            : (0, vue_demi_1.h)(props.logo, {
                                class: "".concat(prefixCls, "-logo"),
                            }),
                    ]);
                }
                else if (left) {
                    return (0, vue_demi_1.h)('div', {
                        class: ["".concat(prefixCls, "-content__left")],
                    }, [(0, shared_1.resolveComponent)(left)]);
                }
                return;
            };
            var renderRight = function () {
                if (right) {
                    return (0, vue_demi_1.h)('div', {
                        class: ["".concat(prefixCls, "-content__right")],
                    }, [(0, shared_1.resolveComponent)(right)]);
                }
                return;
            };
            return (0, vue_demi_1.h)('div', {
                class: [prefixCls, fixed ? "".concat(prefixCls, "--fixed") : ''],
                style: style,
            }, [
                fixed &&
                    placeholder &&
                    (0, vue_demi_1.h)('div', { class: ["".concat(prefixCls, "__placeholder")] }),
                (0, vue_demi_1.h)('div', {
                    class: ["".concat(prefixCls, "__container")],
                }, [
                    (0, vue_demi_1.h)('div', {
                        class: ["".concat(prefixCls, "-content")],
                        style: {
                            width: containerWidth,
                        },
                    }, [
                        renderLeft(),
                        (0, vue_demi_1.h)('div', {
                            class: [
                                "".concat(prefixCls, "-content__middle"),
                                "".concat(prefixCls, "-content__middle--").concat(contentAlign),
                            ],
                        }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)),
                        renderRight(),
                    ]),
                ]),
            ]);
        };
    },
});
exports.Navbar = (0, shared_1.composeExport)(Nav, {
    Menu: menu_1.NavMenu,
});
exports.default = exports.Navbar;
//# sourceMappingURL=index.js.map