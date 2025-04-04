<template>
  <div class="prose">
    <ul class="columns-2 md:columns-3">
      <li v-for="category in visibleCategories" :key="category.name">
        <a :href="`/ja/blog/tech/${category.name}`">{{ category.name }} ({{ category.count }})</a>
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
import { useCategory } from '../../../composables/content/useCategory';
import SecondaryButton from '@takasqr/tw-vue-ui/template/secondary-button/SecondaryButton.vue'

const count = 16
const showAll = ref(false)
const rawCategories = await useCategory('/ja/blog/')
const categories = rawCategories.sort((a, b) => b.count - a.count)

const visibleCategories = computed(() => {
  return showAll.value ? categories : categories.slice(0, count)
})
</script>
