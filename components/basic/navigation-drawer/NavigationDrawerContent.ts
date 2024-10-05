export type NavigationDrawerContent = {
  name: string
  href?: string
  onClick?: () => void
  icon?: any
  current?: boolean
  subItems?: NavigationDrawerContent[]
  isOpen?: boolean
}
