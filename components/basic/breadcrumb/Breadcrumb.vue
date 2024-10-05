<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <a href="/" :class="mergedClasses.base">
            <HomeIcon class="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon :class="mergedClasses.icon?.base" aria-hidden="true" />
          <a
           :href="`${page.href}`"
           :class="mergedClasses.text?.base"
           :aria-current="page.current ? 'page' : undefined"
          >
            {{ page.name }}
          </a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid'
import { useRouter, useRoute } from 'vue-router'
import type { RouteMeta } from 'vue-router';
import { ref, onMounted, watch, type PropType } from 'vue';
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

const props = defineProps({
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  base: 'text-gray-400 hover:text-gray-500',
  text: {
    base: 'ml-4 text-sm font-medium text-gray-500 hover:text-gray-700'
  },
  icon: {
    base: 'h-5 w-5 flex-shrink-0 text-gray-400'
  }
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

type Page = {
    name: string;
    href: string;
    current: boolean;
};

const pages = ref<Page[]>([]);

const router = useRouter();
const route = useRoute();

onMounted(set);
watch(() => route.path, set);

function set() {
  const pathSegments = splitPath(route.path);
  let fullPath = '';

  pages.value = pathSegments.map((segment, index) => {
    fullPath += '/' + segment;

    const metaData = getRouteMeta(fullPath);
    // タイトルが undefined の場合は segment をそのまま使用
    const title = metaData?.title as string || segment;

    return {
      name: title,  // ここで string 型を強制的に指定
      href: fullPath,
      current: (index === pathSegments.length - 1)  // 最後のセグメントだけを現在とマーク
    };
  });
}

function splitPath(path: string): string[] {
  return path.replace(/^\//, '').split('/');
}

function getRouteMeta(path: string): RouteMeta | undefined {
  const matchedRoute = router.getRoutes().find(route => route.path === path);
  return matchedRoute?.meta;
}
</script>
