import type { ISchema } from '@formily/vue'

export const PageLayout: ISchema = {
  type: 'object',
  properties: {
    'themeVars.primary': {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'ColorInput',
      'x-component-props': {
        popupProps: {
          placement: 'bottom',
        },
        colorPickerProps: {
          disableAlpha: true,
        },
      },
    },
    containerWidth: {
      type: 'string',
      'x-decorator': 'FormItem',
      'x-component': 'SizeInput',
      'x-component-props': {
        include: ['auto', 'px'],
      },
      'x-reactions': (field) => {
        if (!field.initialized) {
          field.initialValue =
            field.initialValue === 'fullwidth' ? 'auto' : field.initialValue
        } else {
          field.value === 'auto'
            ? field.setValue('fullwidth')
            : field.setValue(field.value)
        }
      },
    },
    shallow: {
      type: 'boolean',
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
