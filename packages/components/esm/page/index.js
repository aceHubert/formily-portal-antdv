import kebabCase from 'lodash.kebabcase';
import { defineComponent, provide } from 'vue-demi';
import { createForm } from '@formily/core';
import { FormProvider, h, useForm } from '@formily/vue';
import { parseStyleUnit } from '../__builtins__/shared';
import { useCssVars } from '../__builtins__/sfc-helper';
import { PageConsumerProps } from './consumer-props';
import { PageInjectKey } from './useApi';
export var Page = defineComponent({
    name: 'Page',
    props: {
        component: {},
        containerWidth: [String, Number],
        themeVars: Object,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var top = useForm();
        useCssVars(function () {
            return props.themeVars
                ? Object.keys(props.themeVars || {}).reduce(function (prev, curr) {
                    prev["theme-".concat(kebabCase(curr))] = props.themeVars[curr];
                    return prev;
                }, {})
                : {};
        });
        provide(PageInjectKey, {
            containerWidth: parseStyleUnit(props.containerWidth || PageConsumerProps.containerWidth),
            themeVars: props.themeVars,
        });
        return function () {
            var _a = props.component, component = _a === void 0 ? 'div' : _a;
            var renderContent = function () {
                return h(component, {}, slots);
            };
            if (top === null || top === void 0 ? void 0 : top.value) {
                return renderContent();
            }
            else {
                var form = createForm();
                return h(FormProvider, { props: { form: form } }, renderContent());
            }
        };
    },
});
export default Page;
//# sourceMappingURL=index.js.map