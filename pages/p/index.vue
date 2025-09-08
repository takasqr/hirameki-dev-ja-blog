<template>
  <NuxtLayout>
    <SpacerIsland>
      <!-- <w-page-block>
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
      </w-page-block> -->

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              記事
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
              メモ
            </h2>
          </template>

          <div class="mb-2">
            <span class="text-gray-600">記事にするほどじゃないやつ</span>
          </div>

          <ArticleListTextOnly :articles="articlesData" />

          <div class="flex flex-1 justify-end m-2">
            <a
              href="/p/memo/"
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

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              タグ
            </h2>
          </template>

          <TagListSimple />
        </w-section>
      </w-page-block>

      <!-- <w-page-block class="bg-gray-50">
        <w-section>
          <AdPomodoroTree />
        </w-section>
      </w-page-block> -->

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
            title="ニュースレター"
            description="最新の更新情報をメールでお知らせします。登録フォームから登録して下さい。"
            :turnstile-site-key="siteKey"
            button-text='購読する'
            placeholder='メールアドレスを入力して下さい。'
            privacy-note='プライバシーポリシーは'
            privacy-policy-text='こちら'
            privacy-policy-url='/ja/privacy/'
            @submit="handleSubmit"
          >
            <Turnstile :turnstile-site-key="siteKey" @token="handleToken" />
          </NewsLetterForm>
        </w-section>
      <!-- </w-page-block> -->

      <w-page-block>
        <w-section>
          <template #title>
            <h2>
              読まれている
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
    </SpacerIsland>
  </NuxtLayout>
</template>

<script setup lang="ts">
import ArticlesHomepage from '../../components/content/articles-homepage/ArticlesHomepage.vue'
import ArticlesRecently from '../../components/content/articles-recently/ArticlesRecently.vue'
// import AdPomodoroTree from '../../components/custom/pomodorotree/AdPomodoroTree.vue'
import { useSetHead } from '#imports'
import MyProfileCard from '../../components/custom/my-profile-card/MyProfileCard.vue'
import MyLibraryCarousel from '../../components/custom/my-library-carousel/MyLibraryCarousel.vue'
import SpacerIsland from 'vanilla-vue-ui/template/spacer-island/WSpacerIsland.vue'
import CategoryListSimple from '../../components/custom/category-list-simple/CategoryListSimple.vue'
import TagListSimple from '../../components/custom/tag-list-simple/TagListSimple.vue'
import WSection from 'vanilla-vue-ui/template/section/WSection.vue'
import WPageBlock from 'vanilla-vue-ui/template/page-block/WPageBlock.vue'
import NewsLetterForm from '@takasqr/tw-vue-ui/template/news-letter-form/NewsLetterForm.vue'
import Turnstile from '../../components/template/turnstile/Turnstile.vue'
import { sendLog } from '../../utils/log/sendLog'
import ArticleListTextOnly from '../../components/content/article-list/ArticleListTextOnly.vue';
import { withTrailingSlash } from 'ufo'
import type { Article } from '../../components/types/Article';

const route = useRoute()
const lang = 'ja'

const token = ref('');

const runtimeConfig = useRuntimeConfig();
const siteKey = runtimeConfig.public.TURNSTILE_SITE_KEY as string | undefined

definePageMeta({
  layout: 'ja-blog-home',
  middleware: ['trailing-slash'],
})

function handleSubmit(email: string) {
  if (token.value.length > 0) {

    const logMessage = { email: email, token: token.value}

    sendLog({ created: new Date(), message: logMessage, appName: 'NewsLetterForm' })

    alert('登録ありがとうございます。送信しました。')
  }
}

function handleToken(turnstileToken: string) {
  token.value = turnstileToken
}

useHead({
  script: [
    {
      src: 'https://challenges.cloudflare.com/turnstile/v0/api.js',
      async: true,
      defer: true,
    },
  ],
})

useSetHead({
  title: 'かいがらブログ',
  description: 'ソフトウェアエンジニアが運営するブログ。技術的な記事や思ったことを投稿します。',
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.path,
})

// memo
// 非同期データ取得のための一意のキーを作成
const asyncDataKey = `memo-all`
const path = '/p/memo/'
const perPage = 6

const { data: articles } = await useAsyncData(asyncDataKey, async () => {
  const rawContent = await queryContent(withTrailingSlash(path))
    .where({ _partial: false })
    .limit(perPage)
    .sort({ createDate: -1 })
    .find()

  // ParsedContent を Article にマッピング
  return rawContent.map(content => ({
    _path: content._path,
    title: content.title,
    createDate: content.createDate,
  }) as unknown as Article)
})

const articlesData = articles.value ?? []
</script>
