<template>
  <div class="bg-white">
    <NuxtLayout>
      <main>
        <CategoryPageView :category="category" />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import CategoryPageView from '../../../../../components/content/category-page-view/CategoryPageView.vue'

const category = 'apple'

definePageMeta({
  layout: 'ja-article-tech',
  middleware: ['trailing-slash']
})

useSetHead(getTechBlogCategoryHeadParams(category))
</script>
