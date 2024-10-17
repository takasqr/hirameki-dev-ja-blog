<template>
  <NuxtLayout>
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <main>
        <ContentDoc v-slot="{ doc }">
          <article class="prose lg:prose-xl">
            <h1>{{ doc.title }}</h1>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </main>
    </div>
    
    <div class="mt-20">
      <ArticlesCategory :category="category"/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ArticlesCategory from '../../../components/content/ArticlesCategory.vue';
import { useHead } from '@unhead/vue'

definePageMeta({
  layout: 'ja-article'
})

const route = useRoute()
const articles = await queryContent(route.fullPath).findOne()
const category = articles.category

useHead({
  meta: [
    { name: 'title', content: articles.title + ' | シェルの技術ブログ' },
    { name: 'description', content: articles.description },
    // Open Graph
    { property: 'og:url', content: `https://blog.takasqr.dev${route.fullPath}` },
    { property: 'og:title', content: articles.title + ' | シェルの技術ブログ' },
    { property: 'og:description', content: articles.description },
    { property: 'og:image', content: 'https://blog.takasqr.dev' + articles.cover },
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@takasqr' },
    { name: 'twitter:creator', content: '@takasqr' },
    // サムネイル指定
    { name: 'thumbnail', content: 'https://blog.takasqr.dev' + articles.cover }
  ],
})
</script>