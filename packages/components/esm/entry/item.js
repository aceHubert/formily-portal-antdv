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
import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
import { resolveComponent } from '../__builtins__/shared';
export var EntryItem = defineComponent({
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
        var prefixCls = "".concat(stylePrefix, "-entry-item");
        return function () {
            var icon = props.icon, text = props.text, blank = props.blank, linkUrl = props.linkUrl;
            var renderIcon = function () {
                return h('div', {
                    class: "".concat(prefixCls, "__icon"),
                }, [
                    typeof icon === 'string' &&
                        /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png)/g.test(icon)
                        ? h('img', {
                            domProps: {
                                src: icon,
                                alt: typeof text === 'string' ? text : icon,
                            },
                        })
                        : resolveComponent(icon),
                ]);
            };
            var renderText = function () {
                return h('p', {
                    class: "".concat(prefixCls, "__text"),
                }, [resolveComponent(text)]);
            };
            return h('a', {
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
export default EntryItem;
//# sourceMappingURL=item.js.map