import { defineComponent, ref, computed, provide, inject } from 'vue-demi'
import { useField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import tinycolor from 'tinycolor2'
import {
  parseStyleUnit,
  resolveComponent,
  composeExport,
  usePrefixCls,
} from '../__builtins__'
import { usePageLayout } from '../page-layout'
import { NavMenu } from './menu'

// Types
import type { Ref, InjectionKey } from 'vue-demi'

export interface NavProps {
  /**
   * logo
   * @type any (string | slot | VNode)
   */
  logo?: any
  /**
   * title
   * @type any (string | slot | VNode)
   */
  title?: any
  /**
   * left container component, logo 会被忽略如果设置 left
   * @type any (string | slot | VNode)
   */
  left?: any
  /**
   * right container component
   * @type any (string | slot | VNode)
   */
  right?: any
  /**
   * fixed to top
   */
  fixed?: boolean
  /**
   * fixed 占位
   */
  placeholder?: boolean
  /**
   * height, 默认： 68px
   */
  height?: string | number
  /**
   * 背景色
   */
  backgroundColor?: string
  /**
   * content 内容对齐方式，默认：left
   */
  contentAlign: 'left' | 'right'
}

export const NavTheme: InjectionKey<Ref<'light' | 'dark'>> = Symbol('NavTheme')

export const useNavTheme = (): Ref<'light' | 'dark'> =>
  inject(NavTheme, ref('dark'))

const Nav = observer(
  defineComponent<NavProps>({
    name: 'Navbar',
    props: {
      logo: [String, Object],
      title: [String, Object],
      left: {},
      right: {},
      fixed: Boolean,
      placeholder: Boolean,
      height: [String, Number],
      backgroundColor: String,
      contentAlign: {
        type: String,
        validator: (value: string) => {
          return ['left', 'right'].includes(value)
        },
      },
    },
    setup(props, { attrs, slots }) {
      const fieldRef = useField()
      const pageLayoutRef = usePageLayout()
      const prefixCls = usePrefixCls('portal-nav', attrs.prefixCls as string)

      const theme = computed(() => {
        const backgroundColor =
          props.backgroundColor ?? pageLayoutRef.value.themeVars?.primary

        if (backgroundColor) {
          const theme = tinycolor(backgroundColor).isLight() ? 'light' : 'dark'
          return theme
        }
        return 'dark'
      })

      provide(NavTheme, theme)

      return () => {
        const {
          logo,
          title = fieldRef.value.componentProps?.title || fieldRef.value.title,
          height,
          left,
          right,
          placeholder = true,
          fixed = true,
          backgroundColor,
          contentAlign = 'right',
        } = props

        let styleHeight: string
        if (height) {
          styleHeight = parseStyleUnit(height)
        }

        const renderContent = h(
          'div',
          {
            class: [
              prefixCls,
              `${prefixCls}--theme-${theme.value}`,
              {
                [`${prefixCls}--fixed`]: fixed,
              },
            ],
            style: {
              backgroundColor,
              height: styleHeight,
            },
          },
          {
            default: () => [
              h(
                'div',
                {
                  class: [`${prefixCls}-content`],
                  style: {
                    width: pageLayoutRef.value.containerWidth,
                    maxWidth: '100%',
                  },
                },
                {
                  default: () => [
                    h(
                      'div',
                      {
                        class: [`${prefixCls}-content__left`],
                      },
                      {
                        default: () => [
                          slots.logo?.() ||
                            (typeof logo === 'string'
                              ? h(
                                  'img',
                                  {
                                    class: `${prefixCls}-logo`,
                                    domProps: {
                                      src: logo,
                                      alt: 'logo',
                                    },
                                  },
                                  {}
                                )
                              : resolveComponent(logo, {
                                  class: `${prefixCls}-logo`,
                                })),
                          (slots.title || title) &&
                            h(
                              'span',
                              { class: `${prefixCls}-title` },
                              {
                                default: () => [
                                  slots.title?.() || resolveComponent(title),
                                ],
                              }
                            ),
                          slots.left?.() || resolveComponent(left),
                        ],
                      }
                    ),
                    h(
                      'div',
                      {
                        class: [
                          `${prefixCls}-content__main`,
                          `${prefixCls}-content__main--${contentAlign}`,
                        ],
                      },
                      { default: () => [slots.default?.()] }
                    ),
                    h(
                      'div',
                      {
                        class: [`${prefixCls}-content__right`],
                      },
                      {
                        default: () => [
                          slots.right?.() || resolveComponent(right),
                        ],
                      }
                    ),
                  ],
                }
              ),
            ],
          }
        )

        if (fixed && placeholder) {
          return h(
            'div',
            {
              class: [`${prefixCls}__placeholder`],
              style: {
                height: styleHeight,
              },
            },
            { default: () => [renderContent] }
          )
        }

        return renderContent
      }
    },
  })
)

export const Navbar = composeExport(Nav, {
  Menu: NavMenu,
})

export default Navbar
