import { defineComponent, h } from 'vue-demi';
import { stylePrefix } from '../__builtins__/configs';
import { resolveComponent } from '../__builtins__/shared';

// Types
import type { Component } from 'vue-demi';

export interface PageItemProps {
  /**
   * 标题
   */
  title?: string | Component;
  /**
   * 标题下划线样式
   */
  titleUnderline?: boolean;
  /**
   * 标题右侧内容或组件
   */
  titleRight?: string | Component;
}

export const PageItem = defineComponent<PageItemProps>({
  name: 'PageItem',
  props: {
    title: {},
    titleRight: {},
    titleUnderline: Boolean,
  },
  setup(props, { slots }) {
    const prefixCls = `${stylePrefix}-page-item`;

    const renderTitle = () => {
      const { title, titleUnderline, titleRight } = props;
      if (title) {
        return h(
          'div',
          {
            class: [
              `${prefixCls}__title`,
              {
                [`${prefixCls}__title--underline`]: !!titleUnderline,
              },
            ],
          },
          [
            h(
              'p',
              {
                class: `${prefixCls}-title__text`,
              },
              resolveComponent(title),
            ),
            titleRight &&
              h(
                'div',
                {
                  class: `${prefixCls}-title__right`,
                },
                [resolveComponent(titleRight)],
              ),
          ],
        );
      }
      return;
    };

    const renderContent = () => {
      return h(
        'div',
        {
          class: `${prefixCls}__content`,
        },
        slots.default?.(),
      );
    };

    return () => {
      return h(
        'div',
        {
          class: [prefixCls],
        },
        [renderTitle(), renderContent()],
      );
    };
  },
});

export default PageItem;
