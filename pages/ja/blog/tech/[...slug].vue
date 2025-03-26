<template>
  <NuxtLayout>
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <main>
        <ContentDoc v-slot="{ doc }">
          <article class="prose lg:prose-xl">
            <TitleSection>{{ doc.title }}</TitleSection>
            
            <PageMetaSection :create-date="article.createDate" :updated="article.updated" />

            <SpacerIsland>
              <ContentRenderer :value="doc" />
            </SpacerIsland>
          </article>
        </ContentDoc>
      </main>
    </div>

    <div class="mt-20">
      <div class="text-xl font-semibold flex justify-center mb-2">
        <h3>この記事を書いた人</h3>
      </div>
      <div class="flex justify-center">
        <MyProfileCard />
      </div>
    </div>

    <div class="mt-20">
      <ArticlesRecommended :category="category"/>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ArticlesRecommended from '../../../../components/content/articles-recommended/ArticlesRecommended.vue';
import { useSetHead } from '../../../../composables/useSetHead'
import MyProfileCard from '../../../../components/custom/my-profile-card/MyProfileCard.vue'
import TitleSection from '../../../../components/template/title-section/TitleSection.vue'
import PageMetaSection from '../../../../components/template/page-meta-section/PageMetaSection.vue'
import SpacerIsland from '@takasqr/tw-vue-ui/template/spacer-island/SpacerIsland.vue';

definePageMeta({
  layout: 'ja-article-tech'
})

const route = useRoute()
const article = await queryContent(route.fullPath).findOne()
const category = article.category

useSetHead({ title: article.title, description: article.description, cover: article.cover, path: route.fullPath })
</script>