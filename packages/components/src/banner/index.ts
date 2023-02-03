import { defineComponent, watch } from 'vue-demi'
import { observer } from '@formily/reactive-vue'
import { useField, h } from '@formily/vue'
import { Carousel } from 'ant-design-vue'
import {
  parseStyleUnit,
  createDataResource,
  equals,
  usePrefixCls,
} from '../__builtins__'
import { usePageLayout } from '../page-layout'

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
      autoplay: { type: Boolean, default: true },
      itemClassName: String,
    },
    setup(props, { attrs, emit }) {
      const fieldRef = useField<Field>()
      const pageLayoutRef = usePageLayout()
      const prefixCls = usePrefixCls('portal-banner', attrs.prefixCls as string)

      const datas = createDataResource<BannerItem>({
        scopedDataRequest: pageLayoutRef.value.scopedDataRequest,
        dataRequest: pageLayoutRef.value.dataRequest,
      })

      watch(
        () => props.dataSource,
        (value, old) => {
          ;(!datas.$loaded || !equals(value, old)) &&
            datas.read({
              dataSource: value || (fieldRef.value.dataSource as any),
            })
        },
        { immediate: true, deep: true }
      )

      return () => {
        const { $result, $loading, $error } = datas

        if ($loading) return null

        if ($error)
          return h(
            'div',
            { class: `${prefixCls}__error` },
            { default: () => [$error.message] }
          )

        let initialSlide = 0
        if (
          props.defaultKey &&
          (initialSlide = $result?.findIndex(
            ({ key }) => key === props.defaultKey
          )) < 0
        ) {
          initialSlide = 0
        }

        const { autoplay, height } = props

        const renderItems = (): VNode[] => {
          const _height = height === 'auto' ? undefined : height
          if (_height) {
            return $result?.map((item) =>
              h(
                'a',
                {
                  class: [
                    `${prefixCls}__item`,
                    `${prefixCls}__item--bg`,
                    props.itemClassName,
                  ],
                  style: {
                    backgroundImage: `url(${item.imageUrl})`,
                    height: parseStyleUnit(_height),
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
                },
                {}
              )
            )
          } else {
            return $result?.map((item) =>
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
                {
                  default: () => [
                    h(
                      'img',
                      {
                        domProps: {
                          src: item.imageUrl,
                          alt: item.imageUrl,
                        },
                      },
                      {}
                    ),
                  ],
                }
              )
            )
          }
        }

        // attrs 中非on开头的参数传给carousel props
        const carouselProps = Object.keys(attrs).reduce(
          (props, key) => {
            if (!key.startsWith('on')) {
              props[key] = attrs[key]
            }
            return props
          },
          {
            initialSlide,
            autoplay,
            afterChange: (current: number) => {
              const value = $result[current].key
              ;(attrs.onChange as onChange)?.(value)
              emit('change', value)
              fieldRef.value.setValue?.(value)
            },
          }
        )

        return h(
          Carousel,
          {
            class: prefixCls,
            props: carouselProps,
          },
          { default: () => [renderItems()] }
        )
      }
    },
  })
)

export default Banner
