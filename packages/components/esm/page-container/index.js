import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
import { parseStyleUnit } from '../__builtins__/shared';
import { usePage } from '../page/useApi';
export var PageContainer = defineComponent({
    name: 'PageContainer',
    props: {
        width: { type: [String, Number] },
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var prefixCls = "".concat(stylePrefix, "-page-container");
        return function () {
            var _a;
            var width = props.width;
            var style = {};
            if (width) {
                width !== 'fullwidth' && (style.width = parseStyleUnit(width));
            }
            else {
                var containerWidth = usePage().containerWidth;
                style.width = containerWidth;
            }
            return h('div', {
                class: [prefixCls, width === 'fullwidth' && "".concat(prefixCls, "-fullwidth")],
                style: style,
            }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
        };
    },
});
export default PageContainer;
//# sourceMappingURL=index.js.map