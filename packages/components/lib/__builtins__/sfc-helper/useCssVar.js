"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssVars = void 0;
var vue_demi_1 = require("vue-demi");
var utils_1 = require("../shared/utils");
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVarsCompatible(getter) {
    if (!utils_1.inBrowser)
        return;
    var instance = (0, vue_demi_1.getCurrentInstance)();
    if (!instance) {
        (0, utils_1.warn)(false, "useCssVars is called without current active component instance.");
        return;
    }
    (0, vue_demi_1.watchPostEffect)(function () {
        var el = instance.proxy.$el;
        // @ts-expect-error type does not export
        var vars = getter(instance, instance._setupProxy);
        if (el && el.nodeType === 1) {
            var style = el.style;
            for (var key in vars) {
                style.setProperty("--".concat(key), vars[key]);
            }
        }
    });
}
exports.useCssVars = vue_demi_1.useCssVars || useCssVarsCompatible;
//# sourceMappingURL=useCssVar.js.map