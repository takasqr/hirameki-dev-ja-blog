<template>
  <NuxtLayout>
    <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
      <main>
        <ContentDoc v-slot="{ doc }">
          <article class="prose lg:prose-xl">
            <h1>{{ doc.title }}</h1>

            <HorizontalScroll>
              <Breadcrumb class="not-prose" />
            </HorizontalScroll>

            <div class="my-6">
              <TweetButton />
            </div>

            <div class="text-gray-400">
              <span v-if="article.createDate">公開日: <time :datetime="article.createDate.replace(/\//g, '-')">{{ article.createDate.replace(/\//g, '-') }}</time></span>
              <span v-if="article.updated" class="ml-2">更新日: <time :datetime="article.updated.replace(/\//g, '-')">{{ article.updated.replace(/\//g, '-') }}</time></span>
            </div>

            <ContentRenderer :value="doc" />
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
import Breadcrumb from '../../../../components/basic/breadcrumb/Breadcrumb.vue'
import HorizontalScroll from '../../../../components/basic/horizontal-scroll/HorizontalScroll.vue'
import TweetButton from '../../../../components/custom/x/TweetButton.vue'
import MyProfileCard from '../../../../components/custom/my-profile-card/MyProfileCard.vue'

definePageMeta({
  layout: 'ja-article-tech'
})

const route = useRoute()
const article = await queryContent(route.fullPath).findOne()
const category = article.category

useSetHead({ title: article.title, description: article.description, cover: article.cover, path: route.fullPath })
</script>