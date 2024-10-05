<script setup lang="ts">
import { ref, type PropType } from 'vue'
import Card from '../../basic/card/Card.vue'
import TextField from '../../basic/text-field/TextField.vue'
import SecondaryButton from '../../template/secondary-button/SecondaryButton.vue'
import MinusSolidIcon from '../../icon/basic/MinusSolidIcon.vue'
import PlusSolidIcon from '../../icon/basic/PlusSolidIcon.vue'
import type { ClassObject } from '../../types/ClassObject'

const props = defineProps({
  data: {
    type: Array as PropType<string[]>,
    default() {
      return ['']
    }
  },
  min: {
    type: Number as PropType<number>,
    default() {
      return 1
    }
  },
  max: {
    type: Number as PropType<number>,
      default() {
        return 10
      }
  },
  shuffleButtonText: {
    type: String as PropType<string>,
    default() {
      return 'Shuffle'
    }
  },
  classes: {
    type: Object as PropType<ClassObject>,
    default() {
      return {
        base: '',
        backgroundColor: '',
        icon: {
          base: ''
        },
        button: {
          base: ''
        }
      }
    }
  }
})

const emits = defineEmits<{
  (event: 'shuffle'): void; // 戻り値がないemit
  (event: 'input', value: string[]): void; // 戻り値があるemit
}>();

// ボタンを非活性にするか
const plusDisabled = ref(false)
const minusDisabled = ref(false)

// @ts-ignore
function editValue(index, event) {
  // @ts-ignore
  props.data[index] = event.target.value

  emits("input", props.data)
}

// @ts-ignore
function clickMinus(index) {
  // 配列から要素を削除
  // @ts-ignore
  props.data.splice(index, 1)

  emits("input", props.data)
}

function clickAllShuffleButton() {
  shuffleArray(props.data)

  emits("shuffle")
}

function clickPlus() {
  props.data.push('')

  emits("input", props.data)
}

// @ts-ignore
const shuffleArray = (array) => {
  // Fisher-Yates シャッフルアルゴリズムを使用して配列をシャッフル
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
</script>

<template>
  <Card class="px-4">
      <div>
        <div v-for="(item, index) in data" :key="index" class="my-4 flex">

          <div class="flex-auto">
            <TextField
              :value="item"
              @input="editValue(index, $event)"
            ></TextField>
          </div>

          <button :disabled="minusDisabled" @click="clickMinus(index)">
            <MinusSolidIcon class="flex-none m-2"></MinusSolidIcon>
          </button>
        </div>

        <div class="pb-4 flex">
          <div class="flex-1">
            <SecondaryButton block @click="clickAllShuffleButton">{{ shuffleButtonText }}</SecondaryButton>
          </div>
          <button :disabled="plusDisabled" @click="clickPlus()">
            <PlusSolidIcon class="flex-none m-2"></PlusSolidIcon>
          </button>
        </div>        
      </div>
  </Card>
</template>
