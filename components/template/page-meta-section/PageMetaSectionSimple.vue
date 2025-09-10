<template>
  <div class="not-prose">
    <SpacerLadder v-if="props.createDate || props.updated">
      <div class="text-gray-400">
        <span v-if="props.createDate">公開日: <time :datetime="props.createDate.replace(/\//g, '-')">{{ props.createDate.replace(/\//g, '-') }}</time></span>
        <span v-if="props.updated" class="ml-2">更新日: <time :datetime="props.updated.replace(/\//g, '-')">{{ props.updated.replace(/\//g, '-') }}</time></span>
      </div>
    </SpacerLadder>

    <SpacerLadder>
      <div class="">
        <TweetButton />
      </div>
    </SpacerLadder>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type PropType } from 'vue'
import SpacerLadder from '@takasqr/tw-vue-ui/template/spacer-ladder/SpacerLadder.vue'
import TweetButton from '~/components/custom/x/TweetButton.vue'

const props = defineProps({
  createDate: {
    type: String as PropType<string>,
    required: false,
    default: null
  },
  updated: {
    type: [String, null] as PropType<string | null>,
    required: false,
    default: null
  },
  showBreadcrumb: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: true
  },
})
</script>