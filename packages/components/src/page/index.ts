import kebabCase from 'lodash.kebabcase'
import { defineComponent, provide, useCssVars } from 'vue-demi'
import { createForm } from '@formily/core'
import { FormProvider, h, useForm } from '@formily/vue'
import { parseStyleUnit } from '../__builtins__/shared'
import { PageConsumerProps } from './consumer-props'
import { PageInjectKey } from './useApi'

// Types
import type { Component } from 'vue-demi'

export interface PageProps {
  component?: string | Component
  containerWidth?: string | number
  themeVars?: Record<string, string>
}

export const Page = defineComponent<PageProps>({
  name: 'Page',
  props: {
    component: {},
    containerWidth: [String, Number],
    themeVars: Object,
  },
  setup(props, { slots }) {
    const top = useForm()

    useCssVars(() => {
      return props.themeVars
        ? Object.keys(props.themeVars || {}).reduce((prev, curr) => {
            prev[`theme-${kebabCase(curr)}`] = props.themeVars[curr]
            return prev
          }, {})
        : {}
    })

    provide(PageInjectKey, {
      containerWidth: parseStyleUnit(
        props.containerWidth || PageConsumerProps.containerWidth
      ),
      themeVars: props.themeVars,
    })

    return () => {
      const { component = 'div' } = props
      const renderContent = () => {
        return h(component, {}, slots)
      }

      if (top?.value) {
        return renderContent()
      } else {
        const form = createForm()
        return h(FormProvider, { props: { form } }, renderContent())
      }
    }
  },
})

export default Page
