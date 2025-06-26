// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MainMenu from '~/components/template/main-menu/MainMenu.vue'

describe('MainMenu', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    expect(wrapper).toBeTruthy()
  })

  it('すべてのメニュー項目が表示されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    expect(wrapper.text()).toContain('Request time off')
    expect(wrapper.text()).toContain('Benefits')
    expect(wrapper.text()).toContain('Schedule a one-on-one')
    expect(wrapper.text()).toContain('Payroll')
    expect(wrapper.text()).toContain('Submit an expense')
    expect(wrapper.text()).toContain('Training')
  })

  it('正しい数のメニュー項目が表示されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const menuItems = wrapper.findAll('.group')
    expect(menuItems).toHaveLength(6)
  })

  it('各メニュー項目にリンクが設定されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const links = wrapper.findAll('a')
    expect(links).toHaveLength(6)
    links.forEach(link => {
      expect(link.attributes('href')).toBe('#')
    })
  })

  it('各メニュー項目にアイコンが表示されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const iconContainers = wrapper.findAll('.inline-flex.rounded-lg')
    expect(iconContainers).toHaveLength(6)
    
    // 各アイコンコンテナにsvgアイコンが含まれることを確認
    iconContainers.forEach(container => {
      const icon = container.find('svg')
      expect(icon.exists()).toBe(true)
      expect(icon.classes()).toContain('h-6')
      expect(icon.classes()).toContain('w-6')
    })
  })

  it('アイコンに正しい色クラスが適用されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const iconContainers = wrapper.findAll('.inline-flex.rounded-lg')
    
    expect(iconContainers[0].classes()).toContain('text-teal-700')
    expect(iconContainers[0].classes()).toContain('bg-teal-50')
    
    expect(iconContainers[1].classes()).toContain('text-purple-700')
    expect(iconContainers[1].classes()).toContain('bg-purple-50')
    
    expect(iconContainers[2].classes()).toContain('text-sky-700')
    expect(iconContainers[2].classes()).toContain('bg-sky-50')
    
    expect(iconContainers[3].classes()).toContain('text-yellow-700')
    expect(iconContainers[3].classes()).toContain('bg-yellow-50')
    
    expect(iconContainers[4].classes()).toContain('text-rose-700')
    expect(iconContainers[4].classes()).toContain('bg-rose-50')
    
    expect(iconContainers[5].classes()).toContain('text-indigo-700')
    expect(iconContainers[5].classes()).toContain('bg-indigo-50')
  })

  it('説明文が表示されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const descriptions = wrapper.findAll('p.text-gray-500')
    expect(descriptions).toHaveLength(6)
    descriptions.forEach(desc => {
      expect(desc.text()).toContain('Doloribus dolores nostrum')
    })
  })

  it('グリッドレイアウトが正しく適用されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const container = wrapper.find('.divide-y.divide-gray-200')
    expect(container.classes()).toContain('overflow-hidden')
    expect(container.classes()).toContain('rounded-lg')
    expect(container.classes()).toContain('bg-gray-200')
    expect(container.classes()).toContain('shadow')
    expect(container.classes()).toContain('sm:grid')
    expect(container.classes()).toContain('sm:grid-cols-2')
    expect(container.classes()).toContain('sm:gap-px')
    expect(container.classes()).toContain('sm:divide-y-0')
  })

  it('角丸が正しい位置に適用されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const menuItems = wrapper.findAll('.group')
    
    // 最初の項目
    expect(menuItems[0].classes()).toContain('rounded-tl-lg')
    expect(menuItems[0].classes()).toContain('rounded-tr-lg')
    expect(menuItems[0].classes()).toContain('sm:rounded-tr-none')
    
    // 2番目の項目
    expect(menuItems[1].classes()).toContain('sm:rounded-tr-lg')
    
    // 最後から2番目の項目
    expect(menuItems[4].classes()).toContain('sm:rounded-bl-lg')
    
    // 最後の項目
    expect(menuItems[5].classes()).toContain('rounded-bl-lg')
    expect(menuItems[5].classes()).toContain('rounded-br-lg')
    expect(menuItems[5].classes()).toContain('sm:rounded-bl-none')
  })

  it('矢印アイコンが各項目に表示されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const arrowIcons = wrapper.findAll('.pointer-events-none.absolute.right-6.top-6')
    expect(arrowIcons).toHaveLength(6)
    
    arrowIcons.forEach(arrow => {
      expect(arrow.find('svg').exists()).toBe(true)
      expect(arrow.classes()).toContain('text-gray-300')
      expect(arrow.classes()).toContain('group-hover:text-gray-400')
    })
  })

  it('フォーカス時のスタイルが設定されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const menuItems = wrapper.findAll('.group')
    menuItems.forEach(item => {
      expect(item.classes()).toContain('focus-within:ring-2')
      expect(item.classes()).toContain('focus-within:ring-inset')
      expect(item.classes()).toContain('focus-within:ring-indigo-500')
    })
  })

  it('タイトルに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(MainMenu)
    
    const titles = wrapper.findAll('h3')
    expect(titles).toHaveLength(6)
    
    titles.forEach(title => {
      expect(title.classes()).toContain('text-base')
      expect(title.classes()).toContain('font-semibold')
      expect(title.classes()).toContain('leading-6')
      expect(title.classes()).toContain('text-gray-900')
    })
  })
})