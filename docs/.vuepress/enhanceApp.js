import pageComponents from '@internal/page-components'
import AntDesign from 'ant-design-vue'
// import '@formily-portal/antdv/style.ts'

export default ({ Vue }) => {
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }
  Vue.use(AntDesign)
}
