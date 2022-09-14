(function (factory) {
    typeof define === 'function' && define.amd ? define('@lj-portal/antdv-renderer', factory) :
    factory();
})((function () { 'use strict';

    (function() {
        const env = {"NODE_ENV":"development"};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();

}));
//# sourceMappingURL=lj-portal.antdv-renderer.umd.development.js.map
