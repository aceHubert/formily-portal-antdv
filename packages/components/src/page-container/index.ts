import { defineComponent, h } from 'vue-demi'
import { stylePrefix } from '../__builtins__/configs'
import { parseStyleUnit } from '../__builtins__/shared'
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
  setup(props, { slots }) {
    const { containerWidth } = usePage()
    const prefixCls = `${stylePrefix}-page-container`

    const style: Record<string, any> = {}
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
