import { defineComponent, h } from 'vue-demi'
import { parseStyleUnit, usePrefixCls } from '../__builtins__'
import { usePage } from '../page/useApi'

export interface PageContainerProps {
  /**
   * container with, default: page.containerWidth
   */
  width?: 'fullwidth' | string | number
}

export const PageContainer = defineComponent<PageContainerProps>({
  name: 'PageContainer',
  props: {
    width: { type: [String, Number] },
  },
  setup(props, { attrs, slots }) {
    const { containerWidth } = usePage()
    const prefixCls = usePrefixCls(
      'protal-page-container',
      attrs.prefixCls as string
    )

    const style: Record<string, any> = {
      minWidth: containerWidth,
    }
    if (props.width) {
      props.width !== 'fullwidth' && (style.width = parseStyleUnit(props.width))
    } else {
      style.width = containerWidth
    }

    return () =>
      h(
        'div',
        {
          class: [
            prefixCls,
            props.width === 'fullwidth' && `${prefixCls}-fullwidth`,
          ],
          style,
        },
        slots.default?.()
      )
  },
})

export default PageContainer
