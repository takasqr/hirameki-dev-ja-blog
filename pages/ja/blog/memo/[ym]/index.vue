<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>{{ category }}</h1>
      </div>
    </template>

    <CategoryPageView :category="categoryString" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import CategoryPageView from '../../../../../components/content/category-page-view/CategoryPageView.vue'

const { category } = useRoute().params
const categoryString = category as unknown as string


definePageMeta({
  layout: 'ja-blog-default',
  middleware: ['trailing-slash', 'redirect-router'],
})

useSetHead(getTechBlogCategoryHeadParams(categoryString))
</script>
