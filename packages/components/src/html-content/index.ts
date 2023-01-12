import { defineComponent, h } from 'vue-demi'
import { usePrefixCls } from '../__builtins__'

export interface HtmlProps {
  /**
   * innerHTML content
   */
  content?: string
}

export const HtmlContent = defineComponent<HtmlProps>({
  name: 'Html',
  props: {
    content: String,
  },
  setup(props, { attrs, slots }) {
    const prefixCls = usePrefixCls('protal-html', attrs.prefixCls as string)

    return () => {
      const content =
        props.content ||
        (() => {
          // child is a string
          const def = slots.default?.()
          if (typeof def === 'string') {
            return def
          }
          return ''
        })()

      return h(
        'div',
        {
          class: [prefixCls],
          domProps: {
            innerHTML: content,
          },
        },
        []
      )
    }
  },
})

export default HtmlContent
