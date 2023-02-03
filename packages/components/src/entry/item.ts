import { defineComponent } from 'vue-demi'
import { h } from '@formily/vue'
import { resolveComponent, parseStyleUnit, usePrefixCls } from '../__builtins__'

export interface EntryItemProps {
  /**
   * icon
   * @type any (string | slot | VNode)
   */
  icon: any
  /**
   * icon class prefix (如果 icon 是 iconfont)
   */
  iconPrefix: string
  /**
   * icon font-size
   */
  iconFontSize: number | string
  /**
   * icon img height/width
   */
  iconImgSize: number | string
  /**
   * icon box element style
   */
  iconStyle: string
  /**
   * text
   * @type any (string | slot | VNode)
   */
  text: any
  /**
   * text box element style
   */
  textStyle: string
  /**
   * 打开链接
   */
  linkUrl?: string
  /**
   * 链接打开方式
   */
  linkTarget?: '_self' | '_blank'
}

export type onClick = (item: EntryItemProps) => void

export const EntryItem = defineComponent<EntryItemProps>({
  name: 'EntryItem',
  inheritAttrs: false,
  emits: ['click'],
  props: {
    icon: {},
    iconPrefix: String,
    iconStyle: String,
    iconFontSize: [String, Number],
    iconImgSize: [String, Number],
    text: {},
    textStyle: String,
    linkUrl: String,
    linkTarget: String,
  },
  setup(props, { attrs, emit }) {
    const prefixCls = usePrefixCls(
      'portal-entry-item',
      attrs.prefixCls as string
    )

    return () => {
      const {
        icon,
        iconPrefix = 'icon',
        iconFontSize,
        iconImgSize,
        iconStyle,
        text,
        textStyle,
        linkUrl,
        linkTarget,
      } = props
      const renderIcon = () => {
        return h(
          'div',
          {
            class: `${prefixCls}__icon`,
            style: iconStyle,
          },
          {
            default: () => [
              typeof icon === 'string'
                ? /(http(s?):)?\/\/([/|.|?|=|\w|\s|-])*/gi.test(icon)
                  ? h(
                      'img',
                      {
                        style:
                          iconImgSize && iconImgSize !== 'inherit'
                            ? {
                                height: parseStyleUnit(iconImgSize),
                                width: parseStyleUnit(iconImgSize),
                              }
                            : {},
                        domProps: {
                          src: icon,
                          alt: typeof text === 'string' ? text : icon,
                        },
                      },
                      {}
                    )
                  : h(
                      'i',
                      {
                        style:
                          iconFontSize && iconFontSize !== 'inherit'
                            ? { fontSize: parseStyleUnit(iconFontSize) }
                            : {},
                        class: ['icon', `${iconPrefix}-${icon}`],
                      },
                      {}
                    )
                : resolveComponent(icon),
            ],
          }
        )
      }

      const renderText = () => {
        return h(
          'p',
          {
            class: `${prefixCls}__text`,
            style: textStyle,
          },
          { default: () => [resolveComponent(text)] }
        )
      }

      return h(
        'a',
        {
          class: prefixCls,
          domProps: {
            href: linkUrl || 'javascript:;',
            target: linkTarget || '_self',
          },
          on: {
            click: () => {
              ;(attrs.onClick as onClick)?.({ ...props })
              emit('click', { ...props })
            },
          },
        },
        { default: () => [renderIcon(), renderText()] }
      )
    }
  },
})

export default EntryItem
