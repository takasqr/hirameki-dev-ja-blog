<template>
  <div class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    <div v-for="article in articles" :key="article._path" class="relative">
      <ArticleListItem :article="article"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import ArticleListItem from '../article-list-item/ArticleListItem.vue';

type Article = {
  _path: string
  title: string
  createDate: string
  description: string
  cover: string
  category: string
  badges?: { bg: string, text: string, content: string }[]
}

defineProps({
  articles: {
    type: Array as PropType<Article[]>,
    required: true
  }
})
</script>