import { defineComponent, h, watch } from 'vue-demi'
import { useField } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import {
  composeExport,
  createDataResource,
  equals,
  usePrefixCls,
} from '../__builtins__'
import { usePage } from '../page/useApi'
import { EntryItem } from './item'

// Types
import type { Field } from '@formily/core'
import type { ScopedDataSource, RemoteDataSource } from '../__builtins__/shared'
import type { EntryItemProps, onClick } from './item'

export interface EntryProps {
  /**
   * 数据源
   */
  dataSource?:
    | ScopedDataSource<EntryItemProps>
    | RemoteDataSource<EntryItemProps>
  /**
   * 显示的列数，默认：4
   */
  columns?: number
  /**
   * item props 默认值，item 里的设置优先
   */
  itemProps: Record<string, any>
}

const EntryContainer = observer(
  defineComponent<EntryProps>({
    name: 'Entry',
    inheritAttrs: false,
    props: {
      dataSource: [Array, Object],
      columns: Number,
      itemProps: Object,
    },
    setup(props, { attrs, emit }) {
      const fieldRef = useField<Field>()
      const { scopedDataRequest, dataRequest } = usePage()
      const prefixCls = usePrefixCls('portal-entry', attrs.prefixCls as string)

      const datas = createDataResource<EntryItemProps>({
        scopedDataRequest,
        dataRequest,
      })

      watch(
        () => props.dataSource,
        (value, old) => {
          !equals(value, old) &&
            datas.read({
              dataSource: value || [],
            })
        },
        { immediate: true, deep: true }
      )

      return () => {
        const { $result = [], $loading, $error } = datas

        if ($loading) return null

        if ($error)
          return h('div', { class: `${prefixCls}__error` }, $error.message)

        const { columns = 4 } = props

        const cols = $result.length < columns ? $result.length : columns
        const rows =
          $result.length / cols + ($result.length % cols === 0 ? 0 : 1)

        return h(
          'div',
          {
            class: [prefixCls, { [`${prefixCls}--mulit-lines`]: rows > 1 }], // 大于1行时左对齐，否则平铺
          },
          $result.map((itemProps) =>
            h(EntryItem, {
              style: {
                flexBasis: `${100 / cols}%`,
              },
              props: Object.assign({}, props.itemProps, itemProps),
              on: {
                click: () => {
                  const plain = JSON.parse(JSON.stringify(itemProps))
                  ;(attrs.onItemClick as onClick)?.(plain)
                  emit('itemClick', plain)
                  fieldRef.value.setValue?.(plain)
                },
              },
            })
          )
        )
      }
    },
  })
)

export const Entry = composeExport(EntryContainer, {
  Item: EntryItem,
})

export default Entry
