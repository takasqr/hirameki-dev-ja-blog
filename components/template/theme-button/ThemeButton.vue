<template>
  <Menu :items="menuItems" menu-class="right-0 z-20" class="flex items-center">
    <div>
      <SunRegularIcon v-if="currentTheme === ThemeMode.Light" :class="classes.icon?.base"/>
      <MoonRegularIcon v-else-if="currentTheme === ThemeMode.Dark" :class="classes.icon?.base" />
      <DesktopRegularIcon v-else :class="classes.icon?.base"/>
    </div>
  </Menu>
</template>

<script setup lang="ts">
import MoonRegularIcon from '../../icon/theme/MoonRegularIcon.vue';
import SunRegularIcon from '../../icon/theme/SunRegularIcon.vue';
import DesktopRegularIcon from '../../icon/theme/DesktopRegularIcon.vue';
import { ref, defineProps, type Ref, type PropType } from 'vue'
import Menu from '../../basic/menu/Menu.vue';
import type { MenuOption } from '../../basic/menu/MenuOption';
import { ThemeStore } from './ThemeStore'
import { ThemeMode } from './ThemeMode'
import type { ClassObject } from '../../types/ClassObject';

// コピーしたかどうか
const currentTheme: Ref<ThemeMode>  = ref(ThemeMode.Light)

const themeStore = ThemeStore()

const menuItems: MenuOption[] = [
  {
    name: 'Light',
    onClick: () => {
      themeStore.setLight()

      currentTheme.value = ThemeMode.Light
    }
  },
  {
    name: 'Dark',
    onClick: () => {
      themeStore.setDark()

      currentTheme.value = ThemeMode.Dark
    }
  },
  {
    name: 'System',
    onClick: () => {
      themeStore.setSystem()

      currentTheme.value = ThemeMode.System
    }
  }
]

defineProps({
  classes: {
    type: Object as PropType<ClassObject>,
    default() {
      return {
        icon: {
          base: ''
        }
      }
    }
  }
})
</script>