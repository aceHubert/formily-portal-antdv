export const Navbar = {
  'zh-CN': {
    title: '导航栏',
    settings: {
      'x-component-props': {
        logo: 'Logo',
        title: '标题',
        fixed: '固定到顶部',
        placeholder: {
          title: '是否占位',
          tooltip: '当固定到顶部时是否生成占位元素',
        },
        height: '高度',
        backgroundColor: '背景色',
        contentAlign: {
          title: '内容对齐',
          dataSource: ['左对齐', '右对齐'],
        },
      },
    },
  },
  'en-US': {
    title: 'Navbar',
    settings: {
      'x-component-props': {
        logo: 'Logo',
        title: 'Title',
        fixed: 'Whether to fixed top',
        placeholder: {
          title: 'Placeholder',
          tooltip: 'Whether to generate a placeholder element when fixed',
        },
        height: 'Height',
        backgroundColor: 'Background color',
        contentAlign: {
          title: 'Content align',
          dataSource: ['Left', 'Right'],
        },
      },
    },
  },
}

export const NavbarMenu = {
  'zh-CN': {
    title: '导航菜单',
    settings: {
      'x-component-props': {
        dataSource: {
          title: '数据源',
          dataSource: [],
        },
        theme: {
          title: '主题',
          dataSource: ['浅色', '深色'],
        },
      },
    },
  },
  'en-US': {
    title: 'Navbar Menu',
    settings: {
      'x-component-props': {
        dataSource: {
          title: 'DataSource',
          dataSource: [],
        },
        theme: {
          title: 'Theme',
          dataSource: ['Light', 'Dark'],
        },
      },
    },
  },
}
