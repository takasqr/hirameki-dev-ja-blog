<template>
  <NuxtLayout>
    <template #title>

      <div v-if="article.showCover">
        <SpacerIsland>
          <div class="border rounded-xl">
            <img :src="article.cover" class="rounded-xl">
          </div>
        </SpacerIsland>
      </div>

      <div class="prose lg:prose-xl">
        <h1>{{ article.title }}</h1>
      </div>
    </template>

    <ContentDoc v-slot="{ doc }">
      <article class="prose lg:prose-xl">
          <ContentRenderer :value="doc" />
      </article>

      <!-- <div class="mt-20">
        <div class="text-xl font-semibold flex justify-center mb-2">
          <h3>この記事を書いた人</h3>
        </div>
        <div class="flex justify-center">
          <MyProfileCard />
        </div>
      </div> -->
    </ContentDoc>

    <template #bottom>
      <ArticlesRecommended :category="category"/>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ArticlesRecommended from '../../../../components/content/articles-recommended/ArticlesRecommended.vue';
import { useSetHead } from '../../../../composables/useSetHead'
import MyProfileCard from '../../../../components/custom/my-profile-card/MyProfileCard.vue'
import SpacerIsland from '@takasqr/tw-vue-ui/template/spacer-island/SpacerIsland.vue';

definePageMeta({
  layout: 'ja-article-tech',
  middleware: ['trailing-slash', 'redirect-router'],
})

const route = useRoute()
const article = await queryContent(route.fullPath).findOne()
const category = article.category

useSetHead({ 
  title: article.title,
  description: article.description,
  cover: article.cover,
  path: route.fullPath
})
</script>
