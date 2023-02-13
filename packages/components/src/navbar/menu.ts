import { defineComponent, getCurrentInstance, computed, watch } from 'vue-demi'
import { Menu } from 'ant-design-vue'
import { useField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import {
  navigateTo,
  createDataResource,
  equals,
  usePrefixCls,
} from '../__builtins__'
import { usePageLayout } from '../page-layout'

// Types
import type { Field } from '@formily/core'
import type { ScopedDataSource, RemoteDataSource } from '../__builtins__/shared'

export interface MenuItem {
  key: string | number
  text: string
  linkUrl?: string
  replace?: boolean
  children?: Array<Omit<MenuItem, 'children'>>
}

export interface NavMenuProps {
  /**
   * Menu 数据源
   */
  dataSource?: ScopedDataSource<MenuItem> | RemoteDataSource<MenuItem>
  /**
   * Menu 主题
   */
  theme?: 'light' | 'dark'
}

export const NavMenu = observer(
  defineComponent<NavMenuProps>({
    name: 'NavMenu',
    emits: ['change'],
    props: {
      dataSource: [Object, Array],
      theme: String,
    },
    setup(props, { attrs, emit }) {
      const instance = getCurrentInstance()
      const fieldRef = useField<Field>()
      const pageLayoutRef = usePageLayout()
      const prefixCls = usePrefixCls(
        'portal-nav-menu',
        attrs.prefixCls as string
      )

      const datas = createDataResource<MenuItem>({
        scopedDataRequest: pageLayoutRef.value.scopedDataRequest,
        dataRequest: pageLayoutRef.value.dataRequest,
      })

      watch(
        () => props.dataSource,
        (value, old) => {
          ;(!datas.$loaded || !equals(value, old)) &&
            datas.read(value || (fieldRef.value.dataSource as any))
        },
        { immediate: true, deep: true }
      )

      const createFlatMenu = (
        menus: MenuItem[],
        flatMenus: Array<Omit<MenuItem, 'children'>> = []
      ) => {
        menus.map(({ children, ...rest }) => {
          flatMenus.push(rest)
          children?.length && createFlatMenu(children, flatMenus)
        })

        return flatMenus
      }

      const flatMenus = computed<Array<Omit<MenuItem, 'children'>>>(() => {
        const { $result = [] } = datas
        return createFlatMenu($result)
      })

      return () => {
        const { $result = [], $loading, $error } = datas

        if ($loading) return null

        if ($error)
          return h(
            'div',
            { class: `${prefixCls}__error` },
            { default: () => [$error.message] }
          )

        const { theme = 'light' } = props

        const renderMenuItem = function renderMenuItem(menu: MenuItem) {
          return h(
            Menu.Item,
            {
              key: menu.key,
            },
            { default: () => [h('span', {}, { default: () => [menu.text] })] }
          )
        }

        return h(
          'div',
          { class: prefixCls },
          {
            default: () => [
              h(
                Menu,
                {
                  props: {
                    theme,
                    mode: 'horizontal',
                    selectable: false,
                  },
                  on: {
                    click: ({ key }: { key: string | number }) => {
                      const menu = flatMenus.value.find(
                        (menu) => menu.key === key
                      )
                      menu?.linkUrl &&
                        navigateTo(menu.linkUrl, {
                          replace: menu.replace,
                          router: (instance.proxy as any).$router,
                        })
                      emit('change', key)
                      fieldRef.value.setValue(key)
                    },
                  },
                },
                {
                  default: () =>
                    $result.map((menu) =>
                      menu.children?.length
                        ? h(
                            Menu.SubMenu,
                            {
                              key: menu.key,
                            },
                            {
                              default: () => [
                                h(
                                  'span',
                                  { slot: 'title' },
                                  { default: () => [menu.text] }
                                ),
                                menu.children.map((child) =>
                                  renderMenuItem(child)
                                ),
                              ],
                            }
                          )
                        : [renderMenuItem(menu)]
                    ),
                }
              ),
            ],
          }
        )
      }
    },
  })
)

export default NavMenu
