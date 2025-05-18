<template>
  <NuxtLayout>
    <SpacerIsland>
      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              コンセプト
            </h2>
          </template>

          <img src="/img/ja/blog/header-image-2.webp">
        </w-section>
        <w-section>
          <SpacerIsland>
            <div class="text-center">
              <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">アプリ開発で気づいたことを<br class="md:hidden">ブログに書いています。</p>
            </div>

            <div class="flex flex-1 justify-end m-2">
              <a
                href="/ja/blog/journal/2025/20250513_about-this-blog/"
                class="text-sm font-semibold leading-6 text-gray-900"
              >このブログについて <span aria-hidden="true">&rarr;</span></a>
            </div>
          </SpacerIsland>
        </w-section>
      </w-page-block>

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              Articles
            </h2>
          </template>

          <ArticlesHomepage :path="lang" />

          <div class="flex flex-1 justify-end m-2">
            <a
              href="/ja/blog/tech/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >もっと読む <span aria-hidden="true">&rarr;</span></a>
          </div>
        </w-section>
      </w-page-block>

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              Recently
            </h2>
          </template>

          <ArticlesRecently :path="lang" />

          <div class="flex flex-1 justify-end m-2">
            <a
              href="/ja/blog/tech/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >もっと読む <span aria-hidden="true">&rarr;</span></a>
          </div>
        </w-section>
      </w-page-block>

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              Dev
            </h2>
          </template>


          <div class="mb-2">
            <span class="text-gray-600">ライブラリ作りました＼(^o^)／</span>
          </div>
          <MyLibraryCarousel />
        </w-section>
      </w-page-block>
      
      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              カテゴリー
            </h2>
          </template>

          <CategoryListSimple />
        </w-section>
      </w-page-block>

      <w-page-block class="bg-gray-50">
        <w-section>
          <AdPomodoroTree />
        </w-section>
      </w-page-block>

      <w-page-block>
        <w-section>
          <div class="text-xl font-semibold flex justify-center mb-2 text-gray-800">
            <h3>このブログを書いてる人</h3>
          </div>
          <div class="flex justify-center">
            <MyProfileCard />
          </div>
        </w-section>
      </w-page-block>

      <!-- <w-page-block> -->
        <w-section>
          <NewsLetterForm
            title="News"
            :turnstile-site-key="token"
            button-text='購読する'
            placeholder='Enter your email'
            privacy-note='We care about your data. Read our '
            privacy-policy-text='privacy policy'
            privacy-policy-url='#'
          />  
        </w-section>
      <!-- </w-page-block> -->
    </SpacerIsland>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ArticlesHomepage from '../../../components/content/articles-homepage/ArticlesHomepage.vue'
import ArticlesRecently from '../../../components/content/articles-recently/ArticlesRecently.vue'
import AdPomodoroTree from '../../../components/custom/pomodorotree/AdPomodoroTree.vue'
import { useSetHead } from '#imports'
import MyProfileCard from '../../../components/custom/my-profile-card/MyProfileCard.vue'
import MyLibraryCarousel from '../../../components/custom/my-library-carousel/MyLibraryCarousel.vue'
import SpacerIsland from 'vanilla-vue-ui/template/spacer-island/WSpacerIsland.vue'
import CategoryListSimple from '../../../components/custom/category-list-simple/CategoryListSimple.vue'
import WSection from 'vanilla-vue-ui/template/section/WSection.vue'
import WPageBlock from 'vanilla-vue-ui/template/page-block/WPageBlock.vue'
import NewsLetterForm from '@takasqr/tw-vue-ui/template/news-letter-form/NewsLetterForm.vue'

const route = useRoute()
const lang = 'ja'

const runtimeConfig = useRuntimeConfig();
const token = runtimeConfig.public.TURNSTILE_SITE_KEY as string | undefined

definePageMeta({
  layout: 'ja-blog-home',
  middleware: ['trailing-slash'],
})

useSetHead({
  title: 'かいがらブログ',
  description: 'ソフトウェアエンジニアが運営するブログ。技術的な記事や思ったことを投稿します。',
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.path,
})
</script>
