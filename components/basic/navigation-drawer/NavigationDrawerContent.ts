import type { Component } from 'vue'

export type NavigationDrawerContent = {
  name: string
  href?: string
  onClick?: () => void
  icon?: Component
  current?: boolean
  subItems?: NavigationDrawerContent[]
  isOpen?: boolean
}
