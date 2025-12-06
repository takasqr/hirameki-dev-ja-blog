<template>
  <main class="bg-[#FFEE7D]">
    <HeaderView class="border-b-2 border-black" />

    <div class="max-w-3xl mx-auto my-4 md:my-8 px-4 md:px-0">
      <slot />
    </div>

    <Footer />
  </main>
</template>

<script setup lang="ts">
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderView from '~/components/custom/general/header/ja-header-view.vue'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
