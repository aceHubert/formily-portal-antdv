<template>
  <Page>
    <Banner></Banner>
  </Page>
</template>

<script>
import { Page, PageContainer, Banner } from '@formily-portal/antdv'

export default {
  name: 'Banner',
  components: { Page, PageContainer, Banner },
  data() {
    return {
      dataSource: [
        {
          key: 1,
          linkUrl: 'https://www.baidu.com',
          imageUrl:
            '//via.placeholder.com/1920x300/FF0000/FFFFFF?text=Image1',
        },
        {
          key: 2,
          imageUrl:
            '//via.placeholder.com/1920x300/008000/FFFFFF?text=Image2',
        },
      ],
    }
  },
}
</script>
