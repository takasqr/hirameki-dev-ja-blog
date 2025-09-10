<template>
  <XShareButton :url="shareUrl" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import XShareButton from '@takasqr/tw-vue-ui/custom/x-share-button/XShareButton.vue'

const route = useRoute()
const reqURL = useRequestURL()

// ページの絶対URL
const pageUrl = computed(() => `${reqURL.origin}${route.fullPath}`)

// ページタイトル（<head><title> を優先）
const pageTitle = ref('')

onMounted(() => {
  // SSRではdocumentが無いので、クライアント側で補完
  if (typeof document !== 'undefined') {
    pageTitle.value = document.title || (route.meta?.title as string) || (route.name?.toString() ?? '')
  }
})

// Twitter Intent のURLを合成
const shareUrl = computed(() => {
  const base = 'https://x.com/intent/tweet'
  const query = new URLSearchParams({
    text: pageTitle.value,
    url: pageUrl.value,
  })
  return `${base}?${query.toString()}`
})
</script>
