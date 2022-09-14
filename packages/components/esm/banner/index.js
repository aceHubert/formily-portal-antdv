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
import { defineComponent, h, ref, watch } from 'vue-demi';
import { Carousel } from 'ant-design-vue';
import { stylePrefix } from '../__builtins__/configs';
import { parseStyleUnit } from '../__builtins__/shared';
export var Banner = defineComponent({
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
        var prefixCls = "".concat(stylePrefix, "-banner");
        var itemsRef = ref([]);
        watch(function () { return props.dataSource; }, function (value) {
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
                        return h('a', {
                            class: "".concat(prefixCls, "__item"),
                            style: {
                                backgroundImage: "url(".concat(item.imageUrl, ")"),
                                height: parseStyleUnit(height),
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
                        return h('a', {
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
                            h('img', {
                                domProps: {
                                    src: item.imageUrl,
                                    alt: item.imageUrl,
                                },
                            }),
                        ]);
                    });
                }
            };
            return h(Carousel, {
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
export default Banner;
//# sourceMappingURL=index.js.map