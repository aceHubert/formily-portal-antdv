import { defineComponent, h, ref, watch } from 'vue-demi'
import { Menu } from 'ant-design-vue'
import { stylePrefix } from '../__builtins__/configs'
import { navigateTo } from '../__builtins__/shared'

export interface MenuItem {
  key: string | number
  text: string
  linkUrl?: string
  replace?: boolean
  children?: Array<Omit<MenuItem, 'children'>>
}

export interface RemoteNavMenuDataSource {
  url: string
  mapper: Record<string, string>
}

export interface NavMenuProps {
  dataSource: MenuItem[] | RemoteNavMenuDataSource
  theme?: 'light' | 'dark'
  router?: any
}

export const NavMenu = defineComponent<NavMenuProps>({
  name: 'NavMenu',
  emits: ['click'],
  props: {
    dataSource: { type: [Array, Object], required: true },
    theme: String,
    router: Object,
  },
  setup(props, { emit }) {
    const prefixCls = `${stylePrefix}-nav-menu`

    let flatMenus: Array<Omit<MenuItem, 'children'>> = []
    const itemsRef = ref<MenuItem[]>([])

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

    watch(
      () => props.dataSource,
      (value) => {
        if (Array.isArray(value)) {
          itemsRef.value = value
          flatMenus = createFlatMenu(value)
        } else {
          // TODO: request from remote
        }
      },
      { immediate: true }
    )

    return () => {
      const items = itemsRef.value
      const { theme = 'light' } = props

      const renderMenuItem = function renderMenuItem(menu: MenuItem) {
        return h(
          Menu.Item,
          {
            key: menu.key,
          },
          [h('span', menu.text)]
        )
      }

      return h(
        Menu,
        {
          class: prefixCls,
          props: {
            theme,
            mode: 'horizontal',
          },
          on: {
            click: ({ key }: { key: string | number }) => {
              const menu = flatMenus.find((menu) => menu.key === key)
              menu?.linkUrl &&
                navigateTo(menu.linkUrl, {
                  replace: menu.replace,
                  router: props.router,
                })
              emit('click', key)
            },
          },
        },
        items.map((menu) =>
          menu.children?.length
            ? h(
                Menu.SubMenu,
                {
                  key: menu.key,
                },
                [
                  h('span', { slot: 'title' }, menu.text),
                  menu.children.map((child) => renderMenuItem(child)),
                ]
              )
            : [renderMenuItem(menu)]
        )
      )
    }
  },
})

export default NavMenu
