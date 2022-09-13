import { defineComponent, h } from 'vue-demi'
import { stylePrefix } from '../__builtins__/configs'
import {
  parseStyleUnit,
  resolveComponent,
  composeExport,
} from '../__builtins__/shared'
import { usePage } from '../page/useApi'
import { NavMenu } from './menu'

// Types
import type { Component } from 'vue-demi'

export interface NavProps {
  /**
   * logo
   */
  logo?: string | Component
  /**
   * left container component, logo 会被忽略如果设置 left
   */
  left?: string | Component
  /**
   * right container component,
   */
  right?: string | Component
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
   * content 内容对齐方式，默认：left
   */
  contentAlign: 'left' | 'right'
}

const Nav = defineComponent<NavProps>({
  name: 'Navbar',
  props: {
    logo: [String, Object],
    left: {},
    right: {},
    fixed: Boolean,
    placeholder: Boolean,
    height: [String, Number],
    contentAlign: {
      type: String,
      validator: (value: string) => {
        return ['left', 'right'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    const prefixCls = `${stylePrefix}-nav`
    const { containerWidth } = usePage()

    return () => {
      const {
        logo,
        height,
        left,
        right,
        placeholder = false,
        fixed = false,
        contentAlign = 'left',
      } = props
      const style: Record<string, any> = {}
      const placeholderStyle: Record<string, any> = {}
      if (height) {
        style.height = parseStyleUnit(height)
        placeholderStyle.height = parseStyleUnit(height)
      }

      const renderLeft = () => {
        if (logo) {
          return h(
            'div',
            {
              class: [`${prefixCls}-content__left`],
            },
            [
              typeof props.logo === 'string'
                ? h('img', {
                    class: `${prefixCls}-logo`,
                    domProps: {
                      src: props.logo,
                      alt: 'logo',
                    },
                  })
                : h(props.logo, {
                    class: `${prefixCls}-logo`,
                  }),
            ]
          )
        } else if (left) {
          return h(
            'div',
            {
              class: [`${prefixCls}-content__left`],
            },
            [resolveComponent(left)]
          )
        }

        return
      }

      const renderRight = () => {
        if (right) {
          return h(
            'div',
            {
              class: [`${prefixCls}-content__right`],
            },
            [resolveComponent(right)]
          )
        }

        return
      }

      return h(
        'div',
        {
          class: [prefixCls, fixed ? `${prefixCls}--fixed` : ''],
          style,
        },
        [
          fixed &&
            placeholder &&
            h('div', { class: [`${prefixCls}__placeholder`] }),
          h(
            'div',
            {
              class: [`${prefixCls}__container`],
            },
            [
              h(
                'div',
                {
                  class: [`${prefixCls}-content`],
                  style: {
                    width: containerWidth,
                  },
                },
                [
                  renderLeft(),
                  h(
                    'div',
                    {
                      class: [
                        `${prefixCls}-content__middle`,
                        `${prefixCls}-content__middle--${contentAlign}`,
                      ],
                    },
                    slots.default?.()
                  ),
                  renderRight(),
                ]
              ),
            ]
          ),
        ]
      )
    }
  },
})

export const Navbar = composeExport(Nav, {
  Menu: NavMenu,
})

export default Navbar
