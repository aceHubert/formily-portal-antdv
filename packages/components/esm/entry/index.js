import { defineComponent, h, ref, watch } from 'vue-demi';
import { Carousel } from 'ant-design-vue';
import { stylePrefix } from '../__builtins__/configs';
import { composeExport } from '../__builtins__/shared';
import { EntryItem } from './item';
var EntryContainer = defineComponent({
    name: 'Entry',
    inheritAttrs: false,
    props: {
        dataSource: { type: [Array, Object], required: true },
        columns: { type: Number, default: 6 },
        rows: Number,
    },
    setup: function (props, _a) {
        var attrs = _a.attrs, emit = _a.emit;
        var prefixCls = "".concat(stylePrefix, "-entry");
        var itemsRef = ref([]);
        watch(function () { return props.dataSource; }, function (value) {
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
                return h('div', {
                    class: [prefixCls, (_a = {}, _a["".concat(prefixCls, "--mulit-lines")] = rows > 1, _a)],
                }, items.map(function (item) {
                    return h(EntryItem, {
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
                    itemVNodes.push(h('div', {
                        class: "".concat(prefixCls, "__paged-item"),
                    }, [renderItems(children.filter(Boolean))]));
                    index += length;
                }
                return itemVNodes;
            };
            if (rows && rows * columns < items.length) {
                return h(Carousel, {
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
export var Entry = composeExport(EntryContainer, {
    Item: EntryItem,
});
export default Entry;
//# sourceMappingURL=index.js.map