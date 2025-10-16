<template>
  <FooterTemplate
    :navigations="navigations"
    :rss-url="rssUrl"
  />
</template>

<script setup lang="ts">
import FooterTemplate from '@takasqr/tw-vue-ui/template/footer-template/FooterTemplate.vue'
import { useFooterNavigation } from '~/composables/useFooterNavigation'

const rssUrl = '/p/feed.xml'

const navigations = useFooterNavigation()
</script>
