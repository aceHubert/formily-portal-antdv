import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
import { resolveComponent } from '../__builtins__/shared';
export var PageItem = defineComponent({
    name: 'PageItem',
    props: {
        title: {},
        titleRight: {},
        titleUnderline: Boolean,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(stylePrefix, "-page-item");
        var renderTitle = function () {
            var _a;
            var title = props.title, titleUnderline = props.titleUnderline, titleRight = props.titleRight;
            if (title) {
                return h('div', {
                    class: [
                        "".concat(prefixCls, "__title"),
                        (_a = {},
                            _a["".concat(prefixCls, "__title--underline")] = !!titleUnderline,
                            _a),
                    ],
                }, [
                    h('p', {
                        class: "".concat(prefixCls, "-title__text"),
                    }, resolveComponent(title)),
                    titleRight &&
                        h('div', {
                            class: "".concat(prefixCls, "-title__right"),
                        }, [resolveComponent(titleRight)]),
                ]);
            }
            return;
        };
        var renderContent = function () {
            var _a;
            return h('div', {
                class: "".concat(prefixCls, "__content"),
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
        return function () {
            return h('div', {
                class: [prefixCls],
            }, [renderTitle(), renderContent()]);
        };
    },
});
export default PageItem;
//# sourceMappingURL=index.js.map