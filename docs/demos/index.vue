<template>
  <Page :content-width="500">
    <PageContainer
      width="fullwidth"
      style="border: 1px solid red; text-algin: center"
    >
      <p>width: 100%</p>
    </PageContainer>
    <PageContainer style="border: 1px solid red; text-algin: center">
      <p>container width 从Page继承</p>
      <PageItem title="标题" title-underline> Content </PageItem>
    </PageContainer>
  </Page>
</template>

<script>
import { Page, PageContainer, PageItem } from '@lj-portal/antdv'

export default {
  components: {
    Page,
    PageContainer,
    PageItem,
  },
  data() {
    return {}
  },
}
</script>
