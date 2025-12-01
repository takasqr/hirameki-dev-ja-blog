<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>{{ yearString }}</h1>
      </div>
    </template>

    <YearPageView :year="yearString" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import YearPageView from '../../../../components/content/year-page-view/YearPageView.vue'
import { getJournalBlogCategoryHeadParams } from '../../../../composables/useSetHead'
const { year } = useRoute().params
const yearString = year as unknown as string


definePageMeta({
  layout: 'ja-blog-default',
  middleware: ['trailing-slash', 'redirect-router'],
})

useSetHead(getJournalBlogCategoryHeadParams(yearString))
</script>
