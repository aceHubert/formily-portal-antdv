import { defineComponent } from 'vue-demi'
import { useField, h } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import {
  parseStyleUnit,
  resolveComponent,
  composeExport,
  usePrefixCls,
} from '../__builtins__'
import { usePageLayout } from '../page-layout'
import { NavMenu } from './menu'

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

      return () => {
        const {
          logo,
          title = fieldRef.value.componentProps?.title || fieldRef.value.title,
          height,
          left,
          right,
          placeholder = false,
          fixed = false,
          backgroundColor,
          contentAlign = 'right',
        } = props

        const style: Record<string, any> = {}
        const placeholderStyle: Record<string, any> = {}
        if (height) {
          style.height = parseStyleUnit(height)
          placeholderStyle.height = parseStyleUnit(height)
        }

        const renderLeft = () => {
          return h(
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
          )
        }

        const renderMain = () => {
          return h(
            'div',
            {
              class: [
                `${prefixCls}-content__main`,
                `${prefixCls}-content__main--${contentAlign}`,
              ],
            },
            { default: () => [slots.default?.()] }
          )
        }

        const renderRight = () => {
          return h(
            'div',
            {
              class: [`${prefixCls}-content__right`],
            },
            {
              default: () => [slots.right?.() || resolveComponent(right)],
            }
          )
        }

        return h(
          'div',
          {
            class: [prefixCls, fixed ? `${prefixCls}--fixed` : ''],
            style,
          },
          {
            default: () => [
              fixed &&
                placeholder &&
                h('div', { class: [`${prefixCls}__placeholder`] }, {}),
              h(
                'div',
                {
                  class: [`${prefixCls}__container`],
                  style: {
                    backgroundColor,
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
                        },
                      },
                      {
                        default: () => [
                          renderLeft(),
                          renderMain(),
                          renderRight(),
                        ],
                      }
                    ),
                  ],
                }
              ),
            ],
          }
        )
      }
    },
  })
)

export const Navbar = composeExport(Nav, {
  Menu: NavMenu,
})

export default Navbar
