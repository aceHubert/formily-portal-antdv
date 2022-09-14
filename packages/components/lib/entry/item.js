"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryItem = void 0;
var vue_demi_1 = require("vue-demi");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
exports.EntryItem = (0, vue_demi_1.defineComponent)({
    name: 'EntryItem',
    inheritAttrs: false,
    emits: ['click'],
    props: {
        icon: {},
        text: {},
        linkUrl: String,
        blank: Boolean,
    },
    setup: function (props, _a) {
        var attrs = _a.attrs, emit = _a.emit;
        var prefixCls = "".concat(configs_1.stylePrefix, "-entry-item");
        return function () {
            var icon = props.icon, text = props.text, blank = props.blank, linkUrl = props.linkUrl;
            var renderIcon = function () {
                return (0, vue_demi_1.h)('div', {
                    class: "".concat(prefixCls, "__icon"),
                }, [
                    typeof icon === 'string' &&
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/g.test(icon)
                        ? (0, vue_demi_1.h)('img', {
                            domProps: {
                                src: icon,
                                alt: typeof text === 'string' ? text : icon,
                            },
                        })
                        : (0, shared_1.resolveComponent)(icon),
                ]);
            };
            var renderText = function () {
                return (0, vue_demi_1.h)('p', {
                    class: "".concat(prefixCls, "__text"),
                }, [(0, shared_1.resolveComponent)(text)]);
            };
            return (0, vue_demi_1.h)('a', {
                class: prefixCls,
                domProps: {
                    href: linkUrl || 'javascript:;',
                    target: blank ? '_blank' : '_self',
                },
                on: {
                    click: function () {
                        var _a;
                        ;
                        (_a = attrs.onClick) === null || _a === void 0 ? void 0 : _a.call(attrs, __assign({}, props));
                        emit('click', __assign({}, props));
                    },
                },
            }, [renderIcon(), renderText()]);
        };
    },
});
exports.default = exports.EntryItem;
//# sourceMappingURL=item.js.map