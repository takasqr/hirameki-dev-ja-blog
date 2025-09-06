<template>
  <div class="bg-white">
    <w-app-template>
      <template #header>
        <HeaderViewMemo />
      </template>

      <template #title>
        <slot name="title" />
      </template>

      <template #default>
        <LazyTemplatePageMetaSectionSimple :create-date="createDate" :updated="updated" />

        <slot />
      </template>

      <template #bottom>
        <slot name="bottom" />
      </template>

      <template #footer>
        <Footer />
      </template>
    </w-app-template>
  </div>
</template>

<script setup lang="ts">
import WAppTemplate from 'vanilla-vue-ui/page-template/app-template/WAppTemplate.vue'
import { LazyTemplatePageMetaSectionSimple } from '#components'
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderViewMemo from '../components/custom/general/header/ja-header-view-memo.vue'
import { useArticleStructuredData } from '../composables/useArticleStructuredData'
import { articleStructuredDataConfig } from '../composables/useArticleStructuredDataConfig'
import { queryContent, useCommonHead } from '#imports'

const route = useRoute()
const article = await queryContent(route.fullPath)
  .only(['title', 'description', 'thumbnail', 'createDate', 'updated', 'cover'])
  .findOne()

const createDate = article?.createDate
const updated = article?.updated

useArticleStructuredData(articleStructuredDataConfig.common, article)

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})

useCommonHead()
</script>
