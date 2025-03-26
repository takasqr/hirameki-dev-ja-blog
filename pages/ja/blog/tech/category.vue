<template>
  <div class="bg-white">
    <NuxtLayout>
      <main>
        <CategoryList
          :categories="categoriesTechBlog"
        />
      </main>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { categoriesTechBlog } from '../../../../components/custom/category-list/categories-tech-blog'
import CategoryList from '../../../../components/custom/category-list/CategoryList.vue';

definePageMeta({
  layout: 'ja-article-tech'
})

</script>
