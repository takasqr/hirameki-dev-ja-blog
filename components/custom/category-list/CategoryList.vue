<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <div
      v-for="category in categories"
      :key="category.name"
      class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
    >
      <div class="flex-shrink-0">
        <component :is="category.icon" />
      </div>
      <div class="min-w-0 flex-1">
        <a
          :href="category.path"
          class="focus:outline-none"
        >
          <span
            class="absolute inset-0"
            aria-hidden="true"
          />
          <p class="text-sm font-medium text-gray-900">{{ category.name }}</p>
          <p class="truncate text-sm text-gray-500">{{ category.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Category } from '../../types/Category'

defineProps({
  categories: {
    type: Array as PropType<Category[]>,
    required: true,
  },
})
</script>
