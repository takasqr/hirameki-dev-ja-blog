<template>
  <Tooltip v-model:is-react="showTooltip" reactive-text="コピーしました" hover-text="クリップボードにコピー">
    <Button @click="click">
      <CopyRegularIcon v-if="!isCopy"></CopyRegularIcon>
      <CopySolidIcon v-else ></CopySolidIcon>
    </Button>
  </Tooltip>
</template>

<script setup lang="ts">
import Button from '../../basic/button/Button.vue'
import CopyRegularIcon from '../../icon/copy/CopyRegularIcon.vue';
import CopySolidIcon from '../../icon/copy/CopySolidIcon.vue';
import { ref, defineProps } from 'vue'
import Tooltip from '../../basic/tooltip/Tooltip.vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

// コピーしたかどうか
const isCopy = ref(false)
const showTooltip = ref(false)

function click() {
  isCopy.value = true

  navigator.clipboard.writeText(props.text).then(() => {
    /* clipboard successfully set */
    showTooltip.value = true
  }, () => {
    /* clipboard write failed */
  });
}
</script>