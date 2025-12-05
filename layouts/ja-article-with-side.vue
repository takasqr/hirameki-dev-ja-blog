<template>
  <div class="bg-white">
    <w-app-template-with-side>
      <template #header>
        <HeaderView />
      </template>

      <template #title>
        <slot name="title" />
      </template>

      <template #meta>
        <LazyTemplatePageMetaSection />
      </template>

      <template #default>
        <slot />
      </template>

      <template #sidebar>
        <div class="">
          <div class="w-full flex justify-center">
            <CustomMyProfileCard />
          </div>
        </div>
      </template>

      <template #bottom>
        <!-- <SpacerIsland>
          <AdOnPost />
        </SpacerIsland> -->

        <slot name="bottom" />

        <!-- <SpacerIsland>
          <AdFooter />
        </SpacerIsland> -->
      </template>

      <template #footer>
        <Footer />
      </template>
    </w-app-template-with-side>

    <Notification />
  </div>
</template>

<script setup lang="ts">
// import WAppTemplate from 'vanilla-vue-ui/page-template/app-template/WAppTemplate.vue'
import Notification from '@takasqr/tw-vue-ui/basic/notification/Notification.vue'
import Footer from '../components/custom/general/CustomFooter.vue'
import WAppTemplateWithSide from './WAppTemplateWithSide.vue'
import HeaderView from '~/components/custom/general/header/ja-header-view-wide.vue'
import { LazyTemplatePageMetaSection, CustomMyProfileCard } from '#components'

useHead({
  htmlAttrs: {
    lang: 'ja',
    prefix: 'og: https://ogp.me/ns#',
  },
})
</script>
