"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePage = exports.PageInjectKey = void 0;
var vue_demi_1 = require("vue-demi");
var shared_1 = require("../__builtins__/shared");
var consumer_props_1 = require("./consumer-props");
exports.PageInjectKey = shared_1.hasSymbol ? Symbol() : '__PAGE_INJECT_KEY';
function usePage(defaultValue) {
    if (defaultValue === void 0) { defaultValue = consumer_props_1.PageConsumerProps; }
    var page = (0, vue_demi_1.inject)(exports.PageInjectKey, defaultValue);
    return page;
}
exports.usePage = usePage;
//# sourceMappingURL=useApi.js.map