<template>
  <div class="rounded-md bg-green-50 p-4">
    <div class="flex">
      <!-- <div class="flex-shrink-0">
        <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
      </div> -->
      <div class="ml-3">
        <h3 class="text-sm font-medium text-green-800">この記事を書いた人</h3>
        <div class="mt-2 text-sm text-green-700">
          <p><a href="https://twitter.com/takasqr">@takasqr</a> アプリケーション開発が大好きなエンジニア。Vue、Swift、Electrom などでアプリを作って公開している。AWS や Firebase などのクラウドサービスも好き。
          </p>
        </div>
        <div class="mt-2 text-sm text-green-700">
          <p><strong>作ったアプリ</strong>：
              <a href="https://keyscript.app">KeyScript</a>
          </p>
        </div>
        <!-- <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <button type="button" class="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">View status</button>
            <button type="button" class="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">Dismiss</button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import Tooltip from '../basic/tooltip/Tooltip.vue'
</script>