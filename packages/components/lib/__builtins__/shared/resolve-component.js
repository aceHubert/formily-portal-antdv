"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveComponent = void 0;
var vue_demi_1 = require("vue-demi");
var utils_1 = require("./utils");
var resolveComponent = function (child, props) {
    if (child) {
        if (typeof child === 'string' || typeof child === 'number') {
            return child;
        }
        else if (typeof child === 'function') {
            // eslint-disable-next-line @typescript-eslint/ban-types
            return child(props);
        }
        else if ((0, utils_1.isVnode)(child)) {
            return child;
        }
        else {
            return (0, vue_demi_1.h)((0, vue_demi_1.toRaw)(child), { props: props });
        }
    }
    return null;
};
exports.resolveComponent = resolveComponent;
//# sourceMappingURL=resolve-component.js.map