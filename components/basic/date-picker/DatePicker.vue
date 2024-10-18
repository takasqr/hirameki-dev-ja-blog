<template>
  <div class="mt-10 text-center">
    <div :class="['flex items-center', mergedClasses.text?.color]">
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        @click="previousMonth"
      >
        <span class="sr-only">Previous month</span>
        <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
      </button>
      <div class="flex-auto text-sm font-semibold">{{ currentYear + '年 ' + currentMonth + '月' }}</div>
      <button
        type="button"
        class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        @click="nextMonth"
      >
        <span class="sr-only">Next month</span>
        <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
    
    <!-- Week -->
    <div class="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
      <template v-for="dayOfTheWeek in daysOfTheWeek" :key="dayOfTheWeek">
        <div>{{ dayOfTheWeek }}</div>
      </template>
    </div>
    <div class="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
      <button
       v-for="(day, dayIdx) in days" 
       :key="day.date" type="button"
       :disabled="day.disabled ? true : false"
       :class="[
        'py-1.5 hover:bg-gray-100 focus:z-10',
        day.isCurrentMonth && !day.disabled ? mergedClasses.backgroundColor : 'bg-gray-100',
        (day.isSelected || day.isToday) && 'font-semibold',
        day.isSelected && 'text-white',
        !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',
        !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-400',
        day.isToday && !day.isSelected && 'text-indigo-600',
        dayIdx === 0 && 'rounded-tl-lg',
        dayIdx === 6 && 'rounded-tr-lg',
        dayIdx === days.length - 7 && 'rounded-bl-lg',
        dayIdx === days.length - 1 && 'rounded-br-lg',
      ]"
       @click="changeDatePicker(day)">
        <time
          :datetime="day.date"
          :class="[
            'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
            day.isSelected && day.isToday && 'bg-indigo-600',
            day.isSelected && !day.isToday && 'bg-gray-900'
          ]"
        >
          {{ getDayDisplayString(day) }}
        </time>
      </button>
    </div>
  </div>
  <input
   ref="input"
   hidden
   @change="changeInput($event)"
  >
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, type PropType } from 'vue'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/vue/20/solid'
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';
import 'dayjs/locale/ja';
import type { ClassObject } from '../../types/ClassObject';
import { deepMergeClassObject } from '../../util';

dayjs.extend(weekday);
dayjs.extend(localeData);

const props = defineProps({
  locale: {
    type: String as PropType<string>,
    default() {
      return 'en'
    }
  },
  disabledDates: {
    type: Array as PropType<string[]>,
    default() {
      return []
    }
  },
  min: {
    type: Date,
  },
  max: {
    type: Date,
  },
  year: {
    type: Number as PropType<number>,
    default() {
      return new Date().getFullYear()
    }
  },
  month: {
    type: Number as PropType<number>,
    default() {
      return new Date().getMonth() + 1
    }
  },
  classes: {
    type: Object as PropType<ClassObject>,
  }
})

const defaultClasses: ClassObject = {
  base: '',
  backgroundColor: 'bg-white',
  text: {
    color: 'text-gray-900'
  },
  rounded: '',
  color: '',
  border: '',
}

// props.classesが渡されていない場合、defaultClassesを使用する
const mergedClasses = props.classes ? deepMergeClassObject(defaultClasses, props.classes) : defaultClasses;

const input = ref<HTMLElement | null>(null)
const daysOfTheWeek = ref<string[]>([])

// emit を定義
const emit = defineEmits<{
  change: [value: Event]
}>()

// 曜日を設定する
daysOfTheWeek.value = getDaysOfTheWeek(props.locale)

// ロケールを指定すると曜日を返す関数
function getDaysOfTheWeek(locale: string): string[] {
  if (locale === 'ja') {
    return ['月', '火', '水', '木', '金', '土', '日']
  } else {
    return ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  }
}

function changeDatePicker(day: Day) {

  // myInput が HTMLInputElement であることを TypeScript に伝える
  const inputElement = input.value as HTMLInputElement | null;
  
  if (inputElement) {
    inputElement.value = day.date;
    const event = new Event('change');
    inputElement.dispatchEvent(event);
  } else {
    console.error('input element is not mounted yet');
  }
}

function changeInput(event: Event) {

  console.log('input chenge.')

  // days に反映
  const target = event.target as HTMLInputElement
  selectDay(target.value)

  emit('change', event)
}

interface Day {
  date: string;
  isCurrentMonth?: boolean;
  isToday?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
}

const currentYear = ref<number>(props.year)
const currentMonth = ref<number>(props.month)
const days = ref<Day[]>([])

// 日付データを生成
days.value = generateCalendarDays({ year: currentYear.value, month: currentMonth.value, locale: props.locale })

function getDayDisplayString(day: Day): string {

    const date: string = day.date
    return date.split('-').pop()?.replace(/^0/, '') || ''
}

function generateCalendarDays({ year, month, locale, selectedDates }: { year: number, month: number, locale: string, selectedDates?: string[] }): Day[] {
  dayjs.locale(locale); // ロケールを設定
  const days: Day[] = [];
  const today = dayjs().startOf('day').format('YYYY-MM-DD');

  // new Date に month を流す時は -1 する必要があるので注意
  const monthIndex = month - 1

  // 月の最初の日と最後の日を取得
  const firstDayOfMonth = dayjs(new Date(year, monthIndex, 1));
  const lastDayOfMonth = dayjs(new Date(year, monthIndex + 1, 0));

  // 前月の最後の月曜日から始まるように調整
  const startDay = firstDayOfMonth.subtract((firstDayOfMonth.weekday() + 6) % 7, 'day');

  // 次月の最初の日曜日で終わるように調整
  const endDay = lastDayOfMonth.add(7 - lastDayOfMonth.weekday(), 'day');

  for (let d = dayjs(startDay); d.isBefore(endDay) || d.isSame(endDay, 'day'); d = d.add(1, 'day')) {

    const isDisabled = props.disabledDates.includes(d.format('YYYY-MM-DD')) ||
      (props.max ? d.toDate() > props.max : false) ||
      (props.min ? d.toDate() < props.min : false)

    days.push({
      date: d.format('YYYY-MM-DD'),
      isCurrentMonth: d.month() === monthIndex,
      isToday: d.format('YYYY-MM-DD') === today,
      isSelected: selectedDates ? selectedDates.includes(d.format('YYYY-MM-DD')) : false,
      disabled: isDisabled
    });
  }

  return days;
}

function nextMonth() {

  if (currentMonth.value < 12) {
    currentMonth.value++
  } else {
    currentMonth.value = 1
    currentYear.value++
  }

  // 日付データを生成
  days.value = generateCalendarDays({ year: currentYear.value, month: currentMonth.value, locale: props.locale })
}

function previousMonth() {
  
  if (currentMonth.value > 1) {
    currentMonth.value--
  } else {
    currentMonth.value = 12
    currentYear.value--
  }

  // 日付データを生成
  days.value = generateCalendarDays({ year: currentYear.value, month: currentMonth.value, locale: props.locale })
}

function selectDay(selectedDate: string) {

  const newDays =  days.value.map(day => ({
    ...day,
    isSelected: day.date === selectedDate ? true : false
  }));

  days.value = newDays
}
</script>