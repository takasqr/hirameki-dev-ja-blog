<template>
  <ul class="space-y-1">
    <li
      v-for="article in articles"
      :key="article.title"
    >
      <a
        :href="article._path"
        class="block p-2 hover:bg-gray-50 rounded-lg"
      >
        <!-- 日付は小さめで上に -->
        <div class="text-sm text-gray-500">
          {{ article.createDate }}
        </div>
        <!-- タイトルは改行して強調 -->
        <div class="text-base font-medium text-gray-800">
          {{ article.title }}
        </div>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import type { Article } from '../../types/Article'

defineProps({
  articles: {
    type: Array as PropType<Article[]>,
    required: true,
  },
})
</script>
