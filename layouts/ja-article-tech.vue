<template>
  <div class="bg-white">
    <HeaderViewTech />

    <Container class="md:mt-6 lg:mt-10 xl:mt-16 mb-16 md:mb-28">
      <slot />
    </Container>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import Footer from '../components/custom/general/CustomFooter.vue'
import HeaderViewTech from '../components/custom/general/header/ja-header-view-tech.vue'
import Container from '../components/basic/container/Container.vue'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
