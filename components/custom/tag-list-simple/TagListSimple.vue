<template>
  <div class="prose">
    <ul class="columns-2 md:columns-3">
      <li v-for="category in visibleCategories" :key="category.name">
        <a :href="`/ja/blog/tag/${category.name}/`">{{ category.name }} ({{ category.count }})</a>
      </li>
    </ul>

    <div class="mt-2 flex justify-end">
      <SecondaryButton
        v-if="!showAll && categories.length > count"
        @click="showAll = true"
      >詳しく表示</SecondaryButton>

      <SecondaryButton
        v-if="showAll && categories.length > count"
        @click="showAll = false"
      >小さく表示</SecondaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTag } from '../../../composables/content/useTag';
import SecondaryButton from '@takasqr/tw-vue-ui/template/secondary-button/SecondaryButton.vue'

const count = 16
const showAll = ref(false)
const rawCategories = await useTag('/ja/blog/')
const categories = rawCategories.sort((a, b) => b.count - a.count)

const visibleCategories = computed(() => {
  return showAll.value ? categories : categories.slice(0, count)
})
</script>
