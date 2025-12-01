<template>
  <NuxtLayout>
    <template #title>
      <div class="prose lg:prose-xl">
        <h1>{{ tag }}</h1>
      </div>
    </template>

    <TagPageView :tag="tagString" />
  </NuxtLayout>
</template>

<script setup lang="ts">
import TagPageView from '../../../../components/content/tag-page-view/TagPageView.vue'
import { getTagHeadParams } from '../../../../composables/useSetHead'

const { tag } = useRoute().params
const tagString = tag as unknown as string

definePageMeta({
  layout: 'ja-blog-default',
  middleware: ['trailing-slash', 'redirect-router'],
})

useSetHead(getTagHeadParams(tagString))
</script>
