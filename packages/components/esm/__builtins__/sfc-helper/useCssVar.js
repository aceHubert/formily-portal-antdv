import { getCurrentInstance, watchPostEffect, useCssVars as useCssVarsV3, } from 'vue-demi';
import { inBrowser, warn } from '../shared/utils';
/**
 * Runtime helper for SFC's CSS variable injection feature.
 * @private
 */
function useCssVarsCompatible(getter) {
    if (!inBrowser)
        return;
    var instance = getCurrentInstance();
    if (!instance) {
        warn(false, "useCssVars is called without current active component instance.");
        return;
    }
    watchPostEffect(function () {
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
export var useCssVars = useCssVarsV3 || useCssVarsCompatible;
//# sourceMappingURL=useCssVar.js.map