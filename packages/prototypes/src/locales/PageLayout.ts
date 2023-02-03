import { createLocales } from '@designable/core'
import { Component } from './Component'

export const PageLayout = createLocales(Component, {
  'zh-CN': {
    title: '页面',
    settings: {
      'x-component-props': {
        themeVars: {
          primary: '主题色',
        },
        containerWidth: {
          title: '内容区域宽度',
          tooltip: '小于设置宽度时将出现横向滚动条，默认值：1200px',
        },
        shallow: '是否浅传递',
      },
    },
  },
  'en-US': {
    title: 'Page',
    settings: {
      'x-component-props': {
        themeVars: {
          primary: 'Primary color',
        },
        containerWidth: {
          title: 'Container width',
          tooltip: 'Show scorll when less than setted width，Default: 1200px',
        },
        shallow: 'Shallow',
      },
    },
  },
})
