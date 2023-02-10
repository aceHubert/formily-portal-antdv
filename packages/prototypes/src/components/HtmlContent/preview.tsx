import { HtmlContent as FormilyHtmlContent } from '@lj-portal/antdv'
import { composeExport } from '@formily/vant/esm/__builtins__'
import { createBehavior, createResource } from '@designable/core'
import { AllSchemas } from '../../schemas'
import { AllLocales } from '../../locales'
import { createFieldSchema } from '../Field'

export const HtmlContent = composeExport(FormilyHtmlContent, {
  Behavior: createBehavior({
    name: 'HtmlContent',
    extends: ['Field'],
    selector: (node) => node.props['x-component'] === 'HtmlContent',
    designerProps: {
      propsSchema: createFieldSchema(AllSchemas.HtmlContent),
    },
    designerLocales: AllLocales.HtmlContent,
  }),
  Resource: createResource({
    icon: (
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path
          d="M354.40128 0c-87.04 0-157.44 70.55872-157.44 157.59872v275.68128H78.72c-21.6576 0-39.36256 17.69984-39.36256 39.36256v236.31872c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.24128v118.08256c0 87.04 70.4 157.59872 157.44 157.59872h472.63744c87.04 0 157.59872-70.55872 157.59872-157.59872V315.0336c0-41.74848-38.9888-81.93024-107.52-149.27872l-29.11744-29.12256L818.87744 107.52C751.5392 38.9888 711.39328 0 669.59872 0H354.4064z m0 78.72h287.20128c28.35456 7.0912 27.99616 42.1376 27.99616 76.8v120.16128c0 21.6576 17.69984 39.35744 39.36256 39.35744h118.07744c39.38816 0 78.87872-0.0256 78.87872 39.36256v512c0 43.32032-35.55328 78.87872-78.87872 78.87872H354.4064c-43.32544 0-78.72-35.5584-78.72-78.87872v-118.08256h393.91744c21.66272 0 39.36256-17.69472 39.36256-39.35744V472.64256c0-21.66272-17.69984-39.36256-39.36256-39.36256H275.68128V157.59872c0-43.32032 35.39456-78.87872 78.72-78.87872zM75.03872 493.59872h22.08256v73.92256H176.7936V493.59872h23.04v175.68256h-23.04V587.6736H97.1264v81.60256h-22.08256V493.59872z m151.68 0h121.92256v20.16256h-49.92v155.52H276.6336v-155.52h-49.92v-20.16256z m148.80256 0h32.64l49.92 143.04256h0.95744l48.96256-143.04256h33.59744v175.68256h-22.07744v-106.56256c0-10.88 0.31744-26.55744 0.95744-47.03744h-0.95744l-52.80256 153.6h-19.2l-52.79744-153.6h-0.96256c1.28 22.4 1.92 38.71744 1.92 48.95744v104.64256h-20.15744V493.59872z m214.07744 0h22.08256v155.52h69.12v20.16256h-91.20256V493.59872z"
          p-id="29112"
          fill="#999999"
          data-spm-anchor-id="a313x.7781069.0.i26"
          class=""
        ></path>
      </g>
    ),
    elements: [
      {
        componentName: 'Field',
        props: {
          type: 'string',
          'x-component': 'HtmlContent',
          'x-component-props': {
            content: '<p><strong>HTML</strong> content</p>',
          },
        },
      },
    ],
  }),
})