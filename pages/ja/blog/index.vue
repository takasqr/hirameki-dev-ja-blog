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
          <MyLibraryCarousel />
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
import ArticlesHomepage from '../../../components/content/articles-homepage/ArticlesHomepage.vue'
import ArticlesRecently from '../../../components/content/articles-recently/ArticlesRecently.vue'
import AdPomodoroTree from '../../../components/custom/pomodorotree/AdPomodoroTree.vue'
import { useSetHead } from '#imports'
import MyProfileCard from '../../../components/custom/my-profile-card/MyProfileCard.vue'
import MyLibraryCarousel from '../../../components/custom/my-library-carousel/MyLibraryCarousel.vue'

const route = useRoute()
const lang = 'ja'

definePageMeta({
  layout: 'ja-blog-home',
})

useSetHead({
  title: 'かいがらブログ',
  description: 'ソフトウェアエンジニアが運営するブログ。技術的な記事や思ったことを投稿します。',
  cover: 'https://asset.hirameki.dev/img%2Fblog%2Fogp_image.webp?alt=media',
  path: route.path,
})
</script>
