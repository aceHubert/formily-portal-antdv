var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { defineComponent, h, ref, watch } from 'vue-demi';
import { Menu } from 'ant-design-vue';
import { stylePrefix } from '../__builtins__/configs';
import { navigateTo } from '../__builtins__/shared';
export var NavMenu = defineComponent({
    name: 'NavMenu',
    emits: ['click'],
    props: {
        dataSource: { type: [Array, Object], required: true },
        theme: String,
        router: Object,
    },
    setup: function (props, _a) {
        var emit = _a.emit;
        var prefixCls = "".concat(stylePrefix, "-nav-menu");
        var flatMenus = [];
        var itemsRef = ref([]);
        var createFlatMenu = function (menus, flatMenus) {
            if (flatMenus === void 0) { flatMenus = []; }
            menus.map(function (_a) {
                var children = _a.children, rest = __rest(_a, ["children"]);
                flatMenus.push(rest);
                (children === null || children === void 0 ? void 0 : children.length) && createFlatMenu(children, flatMenus);
            });
            return flatMenus;
        };
        watch(function () { return props.dataSource; }, function (value) {
            if (Array.isArray(value)) {
                itemsRef.value = value;
                flatMenus = createFlatMenu(value);
            }
            else {
                // TODO: request from remote
            }
        }, { immediate: true });
        return function () {
            var items = itemsRef.value;
            var _a = props.theme, theme = _a === void 0 ? 'light' : _a;
            var renderMenuItem = function renderMenuItem(menu) {
                return h(Menu.Item, {
                    key: menu.key,
                }, [h('span', menu.text)]);
            };
            return h(Menu, {
                class: prefixCls,
                props: {
                    theme: theme,
                    mode: 'horizontal',
                },
                on: {
                    click: function (_a) {
                        var key = _a.key;
                        var menu = flatMenus.find(function (menu) { return menu.key === key; });
                        (menu === null || menu === void 0 ? void 0 : menu.linkUrl) &&
                            navigateTo(menu.linkUrl, {
                                replace: menu.replace,
                                router: props.router,
                            });
                        emit('click', key);
                    },
                },
            }, items.map(function (menu) {
                var _a;
                return ((_a = menu.children) === null || _a === void 0 ? void 0 : _a.length)
                    ? h(Menu.SubMenu, {
                        key: menu.key,
                    }, [
                        h('span', { slot: 'title' }, menu.text),
                        menu.children.map(function (child) { return renderMenuItem(child); }),
                    ])
                    : [renderMenuItem(menu)];
            }));
        };
    },
});
export default NavMenu;
//# sourceMappingURL=menu.js.map