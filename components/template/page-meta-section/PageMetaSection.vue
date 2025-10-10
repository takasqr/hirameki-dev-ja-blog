<template>
  <div class="not-prose">
    <SpacerLadder v-if="props.showBreadcrumb">
      <WHorizontalScroll :scrollbar-width="'none'">
        <w-breadcrumb :trailing-slash="true" />
      </WHorizontalScroll>
    </SpacerLadder>

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
import WBreadcrumb from 'vanilla-vue-ui/basic/breadcrumb/WBreadcrumb.vue'
import WHorizontalScroll from 'vanilla-vue-ui/basic/horizontal-scroll/WHorizontalScroll.vue'
import TweetButton from '../../../components/custom/x/TweetButton.vue'
import { defineProps, type PropType } from 'vue'
import SpacerLadder from '@takasqr/tw-vue-ui/template/spacer-ladder/SpacerLadder.vue'

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