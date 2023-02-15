import { defineComponent } from 'vue-demi'
import { createBehavior, createResource } from '@designable/core'
import { uid } from '@designable/shared'
import {
  useTreeNode,
  DroppableWidget,
  TreeNodeWidget,
} from '@formily/antdv-designable'
import { Navbar as FormilyNavbar } from '@lj-portal/antdv'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { createFieldSchema } from '../Field'
import './styles.less'

import type { TreeNode } from '@designable/core'

export const Navbar = composeExport(
  defineComponent({
    name: 'DnNavbar',
    props: { title: {} },
    setup(props, { attrs, slots }) {
      const nodeRef = useTreeNode()

      return () => {
        const node = nodeRef.value

        return (
          <FormilyNavbar
            class="dn-navbar"
            attrs={attrs}
            scopedSlots={{
              title: () => (
                <span data-content-editable="x-component-props.title">
                  {props.title}
                </span>
              ),
            }}
          >
            {nodeRef.value.children.length ? (
              node.children.map((child) => (
                <TreeNodeWidget key={uid()} node={child} />
              ))
            ) : (
              <DroppableWidget
                key={uid()}
                node={node}
                height={48}
                style={{ width: '100%' }}
              />
            )}
          </FormilyNavbar>
        )
      }
    },
  }),
  {
    Menu: FormilyNavbar.Menu,
    Behavior: createBehavior(
      {
        name: 'Navbar',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Navbar',
        designerProps: {
          droppable: true,
          allowDrop(parent) {
            // 只允许在顶层的第一位并只能添加一次
            return (
              parent.isRoot &&
              !parent.children.some(
                (node) => node.props['x-component'] === 'Navbar'
              )
            )
          },
          // allowAppend(target, sources) {
          // return sources?.every((node) =>
          //   node.props['x-component'].startsWith('Navbar.')
          // )
          // },
          // allowSiblings(target, sources) {
          //   // 只允许往后面加
          //   return target.parent.firstChild !== target
          // },
          propsSchema: createFieldSchema(AllSchemas.Navbar),
        },
        designerLocales: AllLocales.Navbar,
      },
      {
        name: 'Navbar.Menu',
        extends: ['Field'],
        selector: (node) => node.props['x-component'] === 'Navbar.Menu',
        designerProps: {
          allowDrop(parent) {
            return (
              parent.props['x-component'] === 'Navbar' &&
              !parent.children.some(
                (node) => node.props['x-component'] === 'Navbar.Menu'
              )
            )
          },
          propsSchema: createFieldSchema(AllSchemas.Navbar.Menu),
        },
        designerLocales: AllLocales.NavbarMenu,
      }
    ),
    Resource: createResource(
      {
        icon: (
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M864 319.04V96H160v753.024l128-39.68v98.048l-183.04 57.6c-20.608 1.28-34.752-4.8-39.68-21.76a32 32 0 0 1-1.28-8.96V32A32 32 0 0 1 96 0h832a32 32 0 0 1 32 32v287.04h-96z"
              fill="#999999"
              p-id="18938"
            ></path>
            <path
              d="M576 528v-96h384v96z m-160 0v-96h96v96z m0 192v-96h96v96z m0 192v-96h96v96z m160-192v-96h384v96z m0 192v-96h384v96z"
              fill="#999999"
              p-id="18939"
            ></path>
          </g>
        ),
        elements: [
          {
            componentName: 'Field',
            props: {
              type: 'void',
              'x-component': 'Navbar',
              'x-component-props': {
                logo: '//via.placeholder.com/100x50?text=Logo',
                title: 'Title',
                contentAlign: 'left',
              },
            },
          },
        ],
      },
      {
        icon: (
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M791.6 134.2c53.9 0 97.8 43.9 97.8 97.8v559.2c0 53.9-43.9 97.8-97.8 97.8H232.4c-53.9 0-97.8-43.9-97.8-97.8V232c0-53.9 43.9-97.8 97.8-97.8h559.2m0-70H232.4c-92.7 0-167.8 75.1-167.8 167.8v559.2c0 92.6 75.1 167.8 167.8 167.8h205.8v0.9h126.7v-0.9h226.7c92.7 0 167.8-75.2 167.8-167.8V232c-0.1-92.7-75.2-167.8-167.8-167.8z"
              p-id="24672"
              fill="#999999"
            ></path>
            <path
              d="M284.8 306h119.8v76.4H284.8zM451.9 306h287.2v76.4H451.9zM284.8 473.8h119.8v76.4H284.8zM451.9 473.8h287.2v76.4H451.9zM284.8 641.5h119.8v76.4H284.8zM451.9 641.5h287.2v76.4H451.9z"
              p-id="24673"
              fill="#999999"
            ></path>
          </g>
        ),
        elements: [
          {
            componentName: 'Field',
            props: {
              type: 'string | number',
              enum: [
                {
                  key: 1,
                  text: 'Open Link',
                  linkUrl: 'javascript:;',
                },
                {
                  key: 2,
                  text: 'Replace Item',
                  linkUrl: 'javascript:;',
                  replace: true,
                },
                {
                  key: 3,
                  text: 'Item',
                  children: [
                    {
                      key: 31,
                      text: 'SubItem1',
                      linkUrl: 'javascript:;',
                    },
                    {
                      key: 32,
                      text: 'SubItem2',
                      linkUrl: 'javascript:;',
                    },
                  ],
                },
              ],
              'x-component': 'Navbar.Menu',
              'x-component-props': {},
            },
          },
        ],
      }
    ),
  }
)
