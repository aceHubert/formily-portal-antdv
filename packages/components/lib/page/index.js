"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var lodash_kebabcase_1 = __importDefault(require("lodash.kebabcase"));
var vue_demi_1 = require("vue-demi");
var core_1 = require("@formily/core");
var vue_1 = require("@formily/vue");
var shared_1 = require("../__builtins__/shared");
var sfc_helper_1 = require("../__builtins__/sfc-helper");
var consumer_props_1 = require("./consumer-props");
var useApi_1 = require("./useApi");
exports.Page = (0, vue_demi_1.defineComponent)({
    name: 'Page',
    props: {
        component: {},
        containerWidth: [String, Number],
        themeVars: Object,
    },
    setup: function (props, _a) {
        var slots = _a.slots;
        var top = (0, vue_1.useForm)();
        (0, sfc_helper_1.useCssVars)(function () {
            return props.themeVars
                ? Object.keys(props.themeVars || {}).reduce(function (prev, curr) {
                    prev["theme-".concat((0, lodash_kebabcase_1.default)(curr))] = props.themeVars[curr];
                    return prev;
                }, {})
                : {};
        });
        (0, vue_demi_1.provide)(useApi_1.PageInjectKey, {
            containerWidth: (0, shared_1.parseStyleUnit)(props.containerWidth || consumer_props_1.PageConsumerProps.containerWidth),
            themeVars: props.themeVars,
        });
        return function () {
            var _a = props.component, component = _a === void 0 ? 'div' : _a;
            var renderContent = function () {
                return (0, vue_1.h)(component, {}, slots);
            };
            if (top === null || top === void 0 ? void 0 : top.value) {
                return renderContent();
            }
            else {
                var form = (0, core_1.createForm)();
                return (0, vue_1.h)(vue_1.FormProvider, { props: { form: form } }, renderContent());
            }
        };
    },
});
exports.default = exports.Page;
//# sourceMappingURL=index.js.map