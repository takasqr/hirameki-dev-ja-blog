<template>
  <div class="bg-white">
    <HeaderView />

    <slot />

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderView from '../components/custom/general/header/ja-header-view.vue'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
