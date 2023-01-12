import { defineComponent, h } from 'vue-demi'
import { useField } from '@formily/vue'
import { resolveComponent, usePrefixCls } from '../__builtins__'

export interface PageItemProps {
  /**
   * 标题，默认值：field.title
   * @type any (string | slot | VNode)
   */
  title?: any
  /**
   * 标题下划线样式
   */
  titleUnderline?: boolean
  /**
   * 标题右侧内容或组件
   * @type any (string | slot | VNode)
   */
  titleRight?: any
}

export const PageItem = defineComponent<PageItemProps>({
  name: 'PageItem',
  props: {
    title: {},
    titleRight: {},
    titleUnderline: Boolean,
  },
  setup(props, { attrs, slots }) {
    const fieldRef = useField()
    const prefixCls = usePrefixCls(
      'protal-page-item',
      attrs.prefixCls as string
    )

    const renderTitle = () => {
      const { title = fieldRef.value.title, titleUnderline, titleRight } = props
      if (title) {
        return h(
          'div',
          {
            class: [
              `${prefixCls}__title`,
              {
                [`${prefixCls}__title--underline`]: !!titleUnderline,
              },
            ],
          },
          [
            h(
              'p',
              {
                class: `${prefixCls}-title__text`,
              },
              resolveComponent(title || fieldRef.value.title)
            ),
            titleRight &&
              h(
                'div',
                {
                  class: `${prefixCls}-title__right`,
                },
                [resolveComponent(titleRight)]
              ),
          ]
        )
      }
      return
    }

    const renderContent = () => {
      return h(
        'div',
        {
          class: `${prefixCls}__content`,
        },
        slots.default?.()
      )
    }

    return () =>
      h(
        'div',
        {
          class: [prefixCls],
        },
        [renderTitle(), renderContent()]
      )
  },
})

export default PageItem
