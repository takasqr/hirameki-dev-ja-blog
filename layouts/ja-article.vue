<template>
  <div class="bg-white">
    <w-app-template>
      <template #header>
        <HeaderViewTech />
      </template>

      <template #title>
        <slot name="title" />
      </template>

      <template #default>
        <LazyTemplatePageMetaSection :create-date="createDate" :updated="updated" />

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
import { LazyTemplatePageMetaSection } from '#components'
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderViewTech from '../components/custom/general/header/ja-header-view.vue'
import { useArticleStructuredData } from '../composables/useArticleStructuredData'
import { articleStructuredDataConfig } from '../composables/useArticleStructuredDataConfig'
import { queryContent } from '#imports'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const route = useRoute()
const article = await queryContent(route.fullPath)
.only(['title', 'description', 'thumbnail', 'createDate', 'updated', 'cover'])
.findOne()

const createDate = article?.createDate
const updated = article?.updated

await useArticleStructuredData(articleStructuredDataConfig.common, article)

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  }
})
</script>
