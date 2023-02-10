import { IBuilderConfig } from '@formily/template'

export const BuilderConfig: IBuilderConfig = {
  targetLibName: 'ant-design-vue',
  targetLibCjsDir: 'lib',
  targetLibEsDir: 'es',
  externals: {
    '@lj-portal/antdv': 'LjPortal.Antdv',
    '@formily/antdv': 'Formily.Antdv',
    '@formily/antdv-designable': 'Formily.AntdvDesignable',
    '@formily/antdv-setters': 'Formily.AntdvSetters',
    '@formily/antdv-settings-form': 'Formily.AntdvSettingsForm',
  },
}
