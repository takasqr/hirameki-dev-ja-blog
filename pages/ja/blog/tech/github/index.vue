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

const category = 'github'

definePageMeta({
  layout: 'ja-article-tech'
})

useSetHead(getTechBlogCategoryHeadParams(category))
</script>
