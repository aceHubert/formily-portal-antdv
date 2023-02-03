import { createLocales } from '@designable/core'
import { Component } from './Component'

export const Page = createLocales(Component, {
  'zh-CN': {
    title: '页面',
    settings: {
       themeVars: {
        primary: '主题色',
      },
      containerWidth: {
        title: '内容区域宽度',
        tooltip: '小于设置宽度时将出现横向滚动条',
      },  
      shallow: '是否浅传递',
    },
  },
  'en-US': {
    title: 'Page',
    settings: {    
      themeVars: {
        primary: 'Primary color',
      },
      containerWidth: {
        title: 'Container width',
        tooltip: 'Show scorll when less than setted width',
      },
      shallow: 'Shallow',
    },
  },
})
