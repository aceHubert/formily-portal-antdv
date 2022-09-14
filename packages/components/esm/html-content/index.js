import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
export var HtmlContent = defineComponent({
    name: 'Html',
    props: {
        content: String,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(stylePrefix, "-html");
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
            return h('div', {
                class: [prefixCls],
                domProps: {
                    innerHTML: content,
                },
            }, []);
        };
    },
});
export default HtmlContent;
//# sourceMappingURL=index.js.map