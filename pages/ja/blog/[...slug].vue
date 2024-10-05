<template>
  <!-- Header -->
  <!-- <HeaderView /> -->

  <NavigationDrawer :title="title"  :navigationTop="navigationTop" :navigationBottom="navigationBottom">
    <div class="bg-white px-6 py-32 lg:px-8">
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
      
      <ArticlesCategory :category="category"></ArticlesCategory>
    </div>
  </NavigationDrawer>

  <Footer class="lg:pl-80" />
</template>

<script setup lang="ts">
import NavigationDrawer from '../../../components/basic/navigation-drawer/NavigationDrawer.vue'
import Footer from '../../../components/custom/general/CustomFooter.vue'
import ArticlesCategory from '../../../components/content/ArticlesCategory.vue';
import { useHead } from '@unhead/vue'
import {
  HomeIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  CurrencyYenIcon,
  CubeIcon,
  BookOpenIcon,
  MinusIcon,
  CodeBracketIcon
} from '@heroicons/vue/24/outline'
import type { NavigationDrawerContent } from '../../../componensts/basic/navigation-drawer/NavigationDrawerContent';

const route = useRoute()
const articles = await queryContent(route.fullPath).findOne()
const category = articles.category

const title = 'シェル(@takasqr)のブログ'
const navigationTop: NavigationDrawerContent[] = [
        { name: 'トップページ', href: '/', onClick: undefined, icon: HomeIcon, current: false },
        { name: 'カテゴリー', href: '/', onClick: undefined, icon: HomeIcon, current: false, subItems: [
          { name: 'Git', href: '/git', icon: CodeBracketIcon, current: false },
          { name: 'Docker', href: '/docker', icon: CodeBracketIcon, current: false },
          { name: 'Vue', href: '/vuejs', icon: CodeBracketIcon, current: false },
          { name: 'Nuxt', href: '/nuxtjs', icon: CodeBracketIcon, current: false },
          { name: 'Windows', href: '/windows', icon: CodeBracketIcon, current: false },
          { name: 'Xcode', href: '/xcode', icon: CodeBracketIcon, current: false },
          { name: 'Docker', href: '/docker', icon: CodeBracketIcon, current: false },
        ], isOpen: true },
        { name: '作ったもの', href: '/', onClick: undefined, icon: HomeIcon, current: false, subItems: [
          { name: 'ひらめき開発', href: 'https://hirameki.dev', icon: CodeBracketIcon, current: false },
        ], isOpen: true },
        { name: 'OSS', href: '/', onClick: undefined, icon: HomeIcon, current: false, subItems: [
          { name: 'JapanJS', href: 'https://japanjs.org', icon: CodeBracketIcon, current: false },
        ], isOpen: true },
      ]

const navigationBottom: NavigationDrawerContent[] = [
        { name: 'トップページ', href: '/' },
        { name: '自己紹介', href: '/profile' },
        { name: 'プライバシー', href: '/privacy' },
        { name: '利用規約', href: '/terms' },
      ]

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

console.log('test')

</script>