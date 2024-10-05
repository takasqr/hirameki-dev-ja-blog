import { defineStore } from 'pinia'
import { ThemeMode } from './ThemeMode'

export const ThemeStore = defineStore('theme', () => {

  function setTheme(mode: ThemeMode) {

    // ローカルストレージを更新
    switch (mode) {
      case ThemeMode.Light:
        localStorage.theme = 'light'
        break
      case ThemeMode.Dark:
        localStorage.theme = 'dark'
        break
      case ThemeMode.System:
        localStorage.removeItem('theme')
        break
    }

    // クラスを更新
    switch (mode) {
      case ThemeMode.Light:

        document.documentElement.classList.remove('dark')
        break
      case ThemeMode.Dark:

        document.documentElement.classList.add('dark')
        break
      case ThemeMode.System:

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
        break
    }

  }

  function setLight() {
    setTheme(ThemeMode.Light)
  }

  function setDark() {
    setTheme(ThemeMode.Dark)
  }

  function setSystem() {
    setTheme(ThemeMode.System)
  }

  // 初回読み込み用
  // ローカルストレージを元に設定
  function setup() {

    if (localStorage.theme === 'dark') {
      setDark()
    } else if (localStorage.theme === 'light') {
      setLight()
    } else {
      setSystem()
    }
  }

  return { setLight, setDark, setSystem, setup }
})
