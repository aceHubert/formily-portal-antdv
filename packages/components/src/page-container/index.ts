import { defineComponent } from 'vue-demi'
import { h } from '@formily/vue'
import { parseStyleUnit, usePrefixCls } from '../__builtins__'
import { usePageLayout } from '../page-layout'

export interface PageContainerProps {
  /**
   * container with, default: page.containerWidth
   */
  width?: 'inherit' | string | number
}

export const PageContainer = defineComponent<PageContainerProps>({
  name: 'PageContainer',
  props: {
    width: [String, Number],
  },
  setup(props, { attrs, slots }) {
    const pageLayoutRef = usePageLayout()
    const prefixCls = usePrefixCls(
      'portal-page-container',
      attrs.prefixCls as string
    )

    return () => {
      const clasNames: Record<string, boolean> = {
        [prefixCls]: true,
      }
      const style: Record<string, any> = {}
      if (props.width === undefined || props.width === 'inherit') {
        if (pageLayoutRef.value.containerWidth === 'fullwidth') {
          clasNames[`${prefixCls}-fullwidth`] = true
        } else {
          style.width = pageLayoutRef.value.containerWidth
          style.maxWidth = '100%'
        }
      } else {
        style.width = parseStyleUnit(props.width)
        style.maxWidth = '100%'
      }

      return h(
        'div',
        {
          class: clasNames,
          style,
        },
        { default: () => [slots.default?.()] }
      )
    }
  },
})

export default PageContainer
