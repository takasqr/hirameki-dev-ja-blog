<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <div
      v-for="article in articles"
      :key="article.title"
      class="relative"
    >
      <ArticleListItemHomepage :article="article" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import ArticleListItemHomepage from '../article-list-item-homepage/ArticleListItemHomepage.vue'

type Article = {
  _path: string
  title: string
  createDate: string
  description: string
  cover: string
  category: string
  badges?: { bg: string, text: string, content: string }[]
  lang?: string
}

defineProps({
  articles: {
    type: Array as PropType<Article[]>,
    required: true,
  },
})
</script>
