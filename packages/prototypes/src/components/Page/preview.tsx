import { computed, defineComponent, unref } from 'vue-demi'
import { createBehavior, createResource } from '@designable/core'
import { createForm } from '@formily/core'
import { observer } from '@formily/reactive-vue'
import { usePrefix } from '@formily/antdv-designable'
import { Page as FormilyPage } from '@formily-portal/antdv'
import { composeExport } from '@formily-portal/antdv/esm/__builtins__'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import './styles.less'

const PageComponent = observer(
  defineComponent({
    name: 'DnPage',
    setup(props, { slots, attrs }) {
      const prefix = usePrefix('designable-page')
      const formRef = computed(() =>
        createForm({
          designable: true,
        })
      )
      return () => {
        const form = unref(formRef)

        return (
          <FormilyPage class={prefix.value} form={form} attrs={attrs}>
            {slots.default?.()}
          </FormilyPage>
        )
      }
    },
  })
)

export const Page = composeExport(PageComponent, {
  Behavior: createBehavior({
    name: 'Page',
    selector: (node) => node.componentName === 'Page',
    designerProps(node) {
      return {
        draggable: !node.isRoot,
        cloneable: !node.isRoot,
        deletable: !node.isRoot,
        droppable: true,
        propsSchema: AllSchemas.Page,
        defaultProps: {
          themeVars: {
            primary: '#046bde',
          },
          containerWidth: '1200px',
          shallow: true,
        },
      }
    },
    designerLocales: AllLocales.Page,
  }),
  Resource: createResource({
    title: { 'zh-CN': '页面', 'en-US': 'Page' },
    icon: 'FormLayoutSource',
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'object',
          'x-component': 'Page',
        },
      },
    ],
  }),
})
