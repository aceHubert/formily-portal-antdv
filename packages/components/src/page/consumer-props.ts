// Types
import type { PageProps } from './index'

export const PageConsumerProps: Required<
  Pick<PageProps, 'containerWidth' | 'themeVars'>
> = {
  containerWidth: '1120px',
  themeVars: {
    primary: '#046bde˝'
  },
}
