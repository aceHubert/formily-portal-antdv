import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
import { parseStyleUnit, resolveComponent, composeExport, } from '../__builtins__/shared';
import { usePage } from '../page/useApi';
import { NavMenu } from './menu';
var Nav = defineComponent({
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
        var prefixCls = "".concat(stylePrefix, "-nav");
        var containerWidth = usePage().containerWidth;
        return function () {
            var _a;
            var logo = props.logo, height = props.height, left = props.left, right = props.right, _b = props.placeholder, placeholder = _b === void 0 ? false : _b, _c = props.fixed, fixed = _c === void 0 ? false : _c, _d = props.contentAlign, contentAlign = _d === void 0 ? 'left' : _d;
            var style = {};
            var placeholderStyle = {};
            if (height) {
                style.height = parseStyleUnit(height);
                placeholderStyle.height = parseStyleUnit(height);
            }
            var renderLeft = function () {
                if (logo) {
                    return h('div', {
                        class: ["".concat(prefixCls, "-content__left")],
                    }, [
                        typeof props.logo === 'string'
                            ? h('img', {
                                class: "".concat(prefixCls, "-logo"),
                                domProps: {
                                    src: props.logo,
                                    alt: 'logo',
                                },
                            })
                            : h(props.logo, {
                                class: "".concat(prefixCls, "-logo"),
                            }),
                    ]);
                }
                else if (left) {
                    return h('div', {
                        class: ["".concat(prefixCls, "-content__left")],
                    }, [resolveComponent(left)]);
                }
                return;
            };
            var renderRight = function () {
                if (right) {
                    return h('div', {
                        class: ["".concat(prefixCls, "-content__right")],
                    }, [resolveComponent(right)]);
                }
                return;
            };
            return h('div', {
                class: [prefixCls, fixed ? "".concat(prefixCls, "--fixed") : ''],
                style: style,
            }, [
                fixed &&
                    placeholder &&
                    h('div', { class: ["".concat(prefixCls, "__placeholder")] }),
                h('div', {
                    class: ["".concat(prefixCls, "__container")],
                }, [
                    h('div', {
                        class: ["".concat(prefixCls, "-content")],
                        style: {
                            width: containerWidth,
                        },
                    }, [
                        renderLeft(),
                        h('div', {
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
export var Navbar = composeExport(Nav, {
    Menu: NavMenu,
});
export default Navbar;
//# sourceMappingURL=index.js.map