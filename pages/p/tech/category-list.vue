<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>{{ "カテゴリー一覧" }}</h1>
      </div>
    </template>

    <CategoryList
      :categories="categoriesTechBlog"
    />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { categoriesTechBlog } from '../../../components/custom/category-list/categories-tech-blog'
import CategoryList from '../../../components/custom/category-list/CategoryList.vue';

definePageMeta({
  layout: 'ja-blog-default',
  middleware: ['trailing-slash', 'redirect-router'],
})

</script>
