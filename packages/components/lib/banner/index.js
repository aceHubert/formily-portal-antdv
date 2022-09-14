"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
var vue_demi_1 = require("vue-demi");
var ant_design_vue_1 = require("ant-design-vue");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
exports.Banner = (0, vue_demi_1.defineComponent)({
    name: 'Banner',
    inheritAttrs: false,
    emit: ['change'],
    props: {
        defaultKey: [String, Number],
        dataSource: { type: [Array, Object], required: true },
        height: [String, Number],
        autoplay: [Boolean],
    },
    setup: function (props, _a) {
        var attrs = _a.attrs, emit = _a.emit;
        var prefixCls = "".concat(configs_1.stylePrefix, "-banner");
        var itemsRef = (0, vue_demi_1.ref)([]);
        (0, vue_demi_1.watch)(function () { return props.dataSource; }, function (value) {
            if (Array.isArray(value)) {
                itemsRef.value = value;
            }
            else {
                // TODO: request from remote
            }
        }, { immediate: true });
        var initialSlide = 0;
        if (props.defaultKey &&
            (initialSlide = itemsRef.value.findIndex(function (_a) {
                var key = _a.key;
                return key === props.defaultKey;
            })) < 0) {
            initialSlide = 0;
        }
        return function () {
            var items = itemsRef.value;
            var _a = props.autoplay, autoplay = _a === void 0 ? items.length > 1 : _a, height = props.height;
            var renderItems = function () {
                if (height) {
                    return itemsRef.value.map(function (item) {
                        return (0, vue_demi_1.h)('a', {
                            class: "".concat(prefixCls, "__item"),
                            style: {
                                backgroundImage: "url(".concat(item.imageUrl, ")"),
                                height: (0, shared_1.parseStyleUnit)(height),
                            },
                            domProps: {
                                href: item.linkUrl || 'javascript:;',
                            },
                            on: {
                                click: function () {
                                    var _a;
                                    ;
                                    (_a = attrs.onItemClick) === null || _a === void 0 ? void 0 : _a.call(attrs, item);
                                    emit('itemClick', item);
                                },
                            },
                        });
                    });
                }
                else {
                    return itemsRef.value.map(function (item) {
                        return (0, vue_demi_1.h)('a', {
                            class: ["".concat(prefixCls, "__item"), props.itemClass],
                            domProps: {
                                href: item.linkUrl || 'javascript:;',
                            },
                            on: {
                                click: function () {
                                    var _a;
                                    ;
                                    (_a = attrs.onItemClick) === null || _a === void 0 ? void 0 : _a.call(attrs, item);
                                    emit('itemClick', item);
                                },
                            },
                        }, [
                            (0, vue_demi_1.h)('img', {
                                domProps: {
                                    src: item.imageUrl,
                                    alt: item.imageUrl,
                                },
                            }),
                        ]);
                    });
                }
            };
            return (0, vue_demi_1.h)(ant_design_vue_1.Carousel, {
                class: prefixCls,
                props: __assign(__assign({}, attrs), { initialSlide: initialSlide, autoplay: autoplay, afterChange: function (current) {
                        var _a;
                        ;
                        (_a = attrs.onChange) === null || _a === void 0 ? void 0 : _a.call(attrs, items[current].key);
                        emit('change', items[current].key);
                    } }),
            }, renderItems());
        };
    },
});
exports.default = exports.Banner;
//# sourceMappingURL=index.js.map