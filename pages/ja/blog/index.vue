<template>
  <NuxtLayout>
    <main>
      <Container class="md:mt-6 lg:mt-6 xl:mt-6 mb-16 md:mb-28">

        <div>
          <h2 class="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Articles
          </h2>

          <ArticlesHomepage :path="lang" />

          <div class="flex flex-1 justify-end m-2">
            <a
              href="/ja/blog/tech/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >もっと読む <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>

        
        <div>
          <h2 class="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recently
          </h2>

          <ArticlesRecently :path="lang" />

          <div class="flex flex-1 justify-end m-2">
            <a
              href="/ja/blog/tech/"
              class="text-sm font-semibold leading-6 text-gray-900"
            >もっと読む <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>

        <div>
          <h2 class="my-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dev
          </h2>

          <div class="mb-2">
            <span class="text-gray-600">ライブラリ作りました＼(^o^)／</span>
          </div>
          <Carousel class="rounded-xl">
            <a href="https://japanjs.org">
              <img
                src="https://image.hirameki.dev/takasqr/image/upload/l_dylagecz4vyaeo3xqcdx/l_text:MPLUS1p-Black.ttf_100_bold:JapanJS%0A日本関連%0A便利ツール,co_rgb:374151,w_620,c_fit/v1712091289/ttpfb67cwdp2pwjes6pw.png"
                alt="JapanJS"
                loading="lazy"
              >
            </a>

            <a href="https://pattern-rules.hirameki.dev/ja">
              <img
                src="https://image.hirameki.dev/takasqr/image/upload/l_dylagecz4vyaeo3xqcdx/l_text:MPLUS1p-Black.ttf_80_bold:ESLint Plugin%0APattern Rules,co_rgb:374151,w_620,c_fit/v1712091289/zq6hxcih0jcwdw2pantm.png"
                alt="pattern-rules"
                loading="lazy"
              >
            </a>
          </Carousel>
        </div>
      </Container>

      <div class="bg-gray-50">
        <Container class="py-8 md:py-10">
          <div class="my-4">
            <AdPomodoroTree />
          </div>
        </Container>
      </div>

      <div class="bg-white">
        <Container class="py-8 md:py-10">
          <div class="my-4">
            <div class="text-xl font-semibold flex justify-center mb-2 text-gray-800">
              <h3>このブログを書いてる人</h3>
            </div>
            <div class="flex justify-center">
              <MyProfileCard />
            </div>
          </div>
        </Container>
      </div>
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
import Container from '@takasqr/tw-vue-ui/basic/container/Container.vue'
import Carousel from '@takasqr/tw-vue-ui/basic/carousel/Carousel.vue'
import ArticlesHomepage from '../../../components/content/articles-homepage/ArticlesHomepage.vue'
import ArticlesRecently from '../../../components/content/articles-recently/ArticlesRecently.vue'
import AdPomodoroTree from '../../../components/custom/pomodorotree/AdPomodoroTree.vue'
import { useSetHead } from '#imports'
import MyProfileCard from '../../../components/custom/my-profile-card/MyProfileCard.vue'

const route = useRoute()
const lang = 'ja'

definePageMeta({
  layout: 'ja-blog-home',
})

useSetHead({
  title: 'かいがらブログ',
  description: '一人のソフトウェアエンジニアの、知ってることを全部書く技術ブログです。',
  cover: 'https://image.hirameki.dev/takasqr/image/upload/l_dylagecz4vyaeo3xqcdx/l_text:MPLUS1p-Black.ttf_80_bold:知ってることを全部書く%0A技術ブログ,co_rgb:374151,w_620,c_fit/v1712091289/zq6hxcih0jcwdw2pantm.png',
  path: route.path,
})
</script>
