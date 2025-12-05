<template>
  <!-- <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"> -->
  <article class="flex h-full flex-col items-start border-2 border-black bg-white p-2 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div class="relative w-full overflow-hidden rounded-xl">
      <a
        :href="withTrailingSlash(props.article._path)"
        :aria-label="props.article.title"
      >
        <img
          loading="lazy"
          :src="getThumbnail(props.article.cover)"
          alt=""
          aria-hidden="true"
          class="
            aspect-[16/9] sm:aspect-[2/1] lg:aspect-[3/2]
            w-full
            rounded-2xl
            scale-105
            bg-gray-100
            object-cover
            origin-center
          "
        >
        <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </a>
    </div>
    <div class="max-w-xl">
      <div class="mt-1 flex items-center gap-x-4 text-xs">
        <time
          :datetime="props.article.createDate"
          class="text-gray-500"
        >{{ props.article.createDate }}</time>
        <!-- <a
          :href="withTrailingSlash('/' + (props.article.lang ? props.article.lang : 'ja') + '/' + props.article.category)"
          class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >{{ props.article.category }}</a> -->
        <!-- <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{ props.article.category }}</p> -->
      </div>
      <div class="group relative">
        <h3 class="mt-0 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <a
            :href="withTrailingSlash(props.article._path)"
            class="line-clamp-3 md:line-clamp-3"
          >
            <span class="absolute inset-0" />
            {{ props.article.title }}
          </a>
        </h3>
        <!-- <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ props.article.description }}</p> -->
      </div>
    </div>
  </article>
  <!-- </div> -->
</template>

<script setup lang="ts">
import { withTrailingSlash } from 'ufo'
import { isCloudinary } from '@blog-utils/cloudinary/isCloudinary'
import { getThumbnailCloudinary } from '@blog-utils/cloudinary/getThumbnailCloudinary'

// const posts = [
//   {
//     id: 1,
//     title: 'Boost your conversion rate',
//     href: '#',
//     description:
//       'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     category: { title: 'Marketing', href: '#' },
//     author: {
//       name: 'Michael Foster',
//       role: 'Co-Founder / CTO',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   // More posts...
// ]

type Article = {
  _path: string
  title: string
  date: string
  description: string
  badges?: { bg: string, text: string, content: string }[]
  lang?: string
}

const props = defineProps({
  article: {
    type: Object,
    required: true,
    validator: (value: Article) => {
      if (value?._path && value.title) {
        return true
      }
      return false
    },
  },
})

function getThumbnail(cover: string): string {
  if (isCloudinary(cover)) {
    return getThumbnailCloudinary(cover)
  }
  else {
    return cover
  }
}
</script>
