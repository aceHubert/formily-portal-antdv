import { defineComponent, h } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { useField } from '@formily/vue'
import { Carousel } from 'ant-design-vue'
import { stylePrefix } from '../__builtins__/configs'
import { parseStyleUnit, createDataResource } from '../__builtins__/shared'
import { usePage } from '../page/useApi'

// Types
import type { VNode } from 'vue-demi'
import type { Field } from '@formily/core'
import type { ScopedDataSource, RemoteDataSource } from '../__builtins__/shared'

export interface BannerItem {
  key: string | number
  imageUrl: string
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
}

export interface BannerProps {
  /**
   * banner 数据源
   */
  dataSource: ScopedDataSource<BannerItem> | RemoteDataSource<BannerItem>
  /**
   * 默认显示的dataSource中key的下标，默认：0
   */
  defaultKey?: BannerItem['key']
  /**
   * 显示的高度(当不设置高度时以 img 标签渲染出图片实际调试，否则按背景平铺)
   */
  height?: string | number
  /**
   * 自动播放，默认：dataSource.length > 1
   */
  autoplay?: boolean
  /**
   * 自定义item class
   */
  itemClassName: string
}

type onChange = (key: string | number) => void
type onItemClick = (item: BannerItem) => void

export const Banner = observer(
  defineComponent<BannerProps>({
    name: 'Banner',
    inheritAttrs: false,
    emit: ['change', 'itemClick'],
    props: {
      dataSource: [Object, Array],
      defaultKey: [String, Number],
      height: [String, Number],
      autoplay: { type: Boolean, default: void 0 },
      itemClassName: String,
    },
    setup(props, { attrs, emit }) {
      const fieldRef = useField<Field>()
      const { scopedDataRequest, dataRequest } = usePage()
      const prefixCls = `${stylePrefix}-banner`

      const datas = createDataResource(props.dataSource || [], {
        scopedDataRequest,
        dataRequest,
      })

      datas.read()

      return () => {
        const { $result = [], $loading, $error } = datas

        if ($loading) return null

        if ($error)
          return h('div', { class: `${prefixCls}__error` }, $error.message)

        let initialSlide = 0
        if (
          props.defaultKey &&
          (initialSlide = $result.findIndex(
            ({ key }) => key === props.defaultKey
          )) < 0
        ) {
          initialSlide = 0
        }

        const { autoplay = $result.length > 1, height } = props

        const renderItems = (): VNode[] => {
          if (height) {
            return $result.map((item) =>
              h('a', {
                class: [
                  `${prefixCls}__item`,
                  `${prefixCls}__item--bg`,
                  props.itemClassName,
                ],
                style: {
                  backgroundImage: `url(${item.imageUrl})`,
                  height: parseStyleUnit(height),
                },
                domProps: {
                  target: item.linkTarget || '_self',
                  href: item.linkUrl || 'javascript:;',
                },
                on: {
                  click: () => {
                    ;(attrs.onItemClick as onItemClick)?.(item)
                    emit('itemClick', item)
                  },
                },
              })
            )
          } else {
            return $result.map((item) =>
              h(
                'a',
                {
                  class: [`${prefixCls}__item`, props.itemClassName],
                  domProps: {
                    target: item.linkTarget || '_self',
                    href: item.linkUrl || 'javascript:;',
                  },
                  on: {
                    click: () => {
                      ;(attrs.onItemClick as onItemClick)?.(item)
                      emit('itemClick', item)
                    },
                  },
                },
                [
                  h('img', {
                    domProps: {
                      src: item.imageUrl,
                      alt: item.imageUrl,
                    },
                  }),
                ]
              )
            )
          }
        }

        return h(
          Carousel,
          {
            class: prefixCls,
            props: {
              ...attrs,
              initialSlide,
              autoplay,
              afterChange: (current: number) => {
                const value = $result[current].key
                ;(attrs.onChange as onChange)?.(value)
                emit('change', value)
                fieldRef.value.setValue?.(value)
              },
            },
          },
          renderItems()
        )
      }
    },
  })
)

export default Banner
