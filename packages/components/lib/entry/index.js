"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entry = void 0;
var vue_demi_1 = require("vue-demi");
var ant_design_vue_1 = require("ant-design-vue");
var configs_1 = require("../__builtins__/configs");
var shared_1 = require("../__builtins__/shared");
var item_1 = require("./item");
var EntryContainer = (0, vue_demi_1.defineComponent)({
    name: 'Entry',
    inheritAttrs: false,
    props: {
        dataSource: { type: [Array, Object], required: true },
        columns: { type: Number, default: 6 },
        rows: Number,
    },
    setup: function (props, _a) {
        var attrs = _a.attrs, emit = _a.emit;
        var prefixCls = "".concat(configs_1.stylePrefix, "-entry");
        var itemsRef = (0, vue_demi_1.ref)([]);
        (0, vue_demi_1.watch)(function () { return props.dataSource; }, function (value) {
            if (Array.isArray(value)) {
                itemsRef.value = value;
            }
            else {
                // TODO: request from remote
            }
        }, { immediate: true });
        return function () {
            var rows = props.rows, columns = props.columns;
            var items = itemsRef.value;
            var renderItems = function (items) {
                var _a;
                var cols = items.length < columns ? items.length : columns;
                var rows = items.length / cols + (items.length % cols === 0 ? 0 : 1);
                return (0, vue_demi_1.h)('div', {
                    class: [prefixCls, (_a = {}, _a["".concat(prefixCls, "--mulit-lines")] = rows > 1, _a)],
                }, items.map(function (item) {
                    return (0, vue_demi_1.h)(item_1.EntryItem, {
                        style: {
                            flexBasis: "".concat(100 / cols, "%"),
                        },
                        props: {
                            icon: item.icon,
                            text: item.text,
                            linkUrl: item.linkUrl,
                            blank: item.blank,
                        },
                        on: {
                            click: function () {
                                var _a;
                                var plain = JSON.parse(JSON.stringify(item));
                                (_a = attrs.onItemClick) === null || _a === void 0 ? void 0 : _a.call(attrs, plain);
                                emit('itemClick', plain);
                            },
                        },
                    });
                }));
            };
            var renderPagedItems = function () {
                var length = rows * columns;
                var index = 0;
                var itemVNodes = [];
                while (index < items.length - 1) {
                    var children = [];
                    for (var i = index; i < index + length; i++) {
                        children.push(items[i]);
                    }
                    itemVNodes.push((0, vue_demi_1.h)('div', {
                        class: "".concat(prefixCls, "__paged-item"),
                    }, [renderItems(children.filter(Boolean))]));
                    index += length;
                }
                return itemVNodes;
            };
            if (rows && rows * columns < items.length) {
                return (0, vue_demi_1.h)(ant_design_vue_1.Carousel, {
                    props: {
                        autoplay: false,
                        dotsClass: "".concat(prefixCls, "__paged-dots"),
                    },
                }, [renderPagedItems()]);
            }
            else {
                return renderItems(items);
            }
        };
    },
});
exports.Entry = (0, shared_1.composeExport)(EntryContainer, {
    Item: item_1.EntryItem,
});
exports.default = exports.Entry;
//# sourceMappingURL=index.js.map