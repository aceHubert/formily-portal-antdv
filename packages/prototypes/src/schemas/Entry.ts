import type { ISchema } from '@formily/vue'

export const Entry: ISchema = {
  type: 'object',
  properties: {
    // dataSource: {
    //   type: 'string',
    //   'x-decorator': 'FormItem',
    //   'x-component': 'Input',
    //   'x-component-props': {
    //     allowClear: true,
    //   },
    // },
    columns: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'InputNumber',
      'x-component-props': {},
    },
    itemProps: {
      type: 'object',
      properties: {
        iconImgSize: {
          type: 'string | number',
          'x-decorator': 'FormItem',
          'x-component': 'SizeInput',
          'x-component-props': {
            include: ['inherit', 'px'],
          },
        },
        iconFontSize: {
          type: 'string | number',
          'x-decorator': 'FormItem',
          'x-component': 'SizeInput',
          'x-component-props': {
            include: ['inherit', 'px'],
          },
        },
      },
    },
  },
}
