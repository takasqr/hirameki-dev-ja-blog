<template>
  <main class="bg-white">
    <HeaderView />

    <slot />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderView from '../components/custom/general/header/ja-header-view.vue'
import { useCommonHead } from '#imports'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})

useCommonHead()
</script>
