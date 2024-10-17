<template>
  <article class="flex flex-col items-start justify-between">
    <div class="relative w-full">
      <a :href="props.article._path">
        <img
          :src="props.article.cover"
          alt=""
          class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        >
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </a>
    </div>
    <div class="max-w-xl">
      <div class="mt-1 flex items-center gap-x-4 text-xs">
        <time
          :datetime="props.article.createDate"
          class="text-gray-500"
        >{{ props.article.createDate }}</time>
        <a
          v-if="article.lang"
          :href="'/' + props.article.lang + '/' + props.article.category"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >{{ props.article.category }}</a>
        <a
          v-else
          :href="'/ja/' + props.article.category"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >{{ props.article.category }}</a>
      </div>
      <div class="group relative">
        <h3 class="mt-0 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a :href="props.article._path">
            <span class="absolute inset-0" />
            {{ props.article.title }}
          </a>
        </h3>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '../../types/Article'

const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
      if (value?._path && value.title) {
        return true
      }
      return false
    },
  },
})
</script>
