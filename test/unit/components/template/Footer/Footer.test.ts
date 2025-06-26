// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Footer from '~/components/template/Footer/Footer.vue'

describe('Footer', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Footer)
    expect(wrapper).toBeTruthy()
  })

  it('会社ロゴが表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const logo = wrapper.find('img')
    expect(logo.exists()).toBe(true)
    expect(logo.attributes('alt')).toBe('Company name')
    expect(logo.classes()).toContain('h-7')
    expect(logo.classes()).toContain('rounded')
  })

  it('Solutionsセクションが正しく表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    expect(wrapper.text()).toContain('Solutions')
    expect(wrapper.text()).toContain('添加物スキャナー for iOS')
    expect(wrapper.text()).toContain('Todo8')
    expect(wrapper.text()).toContain('エージェントAI')
  })

  it('Legalセクションが正しく表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    expect(wrapper.text()).toContain('Legal')
    expect(wrapper.text()).toContain('プライバシーポリシー')
  })

  it('Solutionsリンクが正しく設定されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const links = wrapper.findAll('a')
    const solutionLinks = links.filter(link => {
      const href = link.attributes('href')
      return href === 'https://apps.apple.com/jp/app/添加物スキャナー/id6469045264' ||
             href === 'https://todo8.app' ||
             href === 'https://agentai.jp'
    })
    
    expect(solutionLinks).toHaveLength(3)
    expect(solutionLinks[0].text()).toBe('添加物スキャナー for iOS')
    expect(solutionLinks[1].text()).toBe('Todo8')
    expect(solutionLinks[2].text()).toBe('エージェントAI')
  })

  it('プライバシーポリシーリンクが正しく設定されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const privacyLink = wrapper.find('a[href="/privacy"]')
    expect(privacyLink.exists()).toBe(true)
    expect(privacyLink.text()).toBe('プライバシーポリシー')
  })

  it('ソーシャルメディアリンクが表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const socialLinks = wrapper.findAll('.flex.space-x-6 a')
    expect(socialLinks).toHaveLength(2)
    
    expect(socialLinks[0].attributes('href')).toBe('https://x.com/takasqr')
    expect(socialLinks[1].attributes('href')).toBe('https://github.com/takasqr')
  })

  it('ソーシャルメディアアイコンが表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const socialIcons = wrapper.findAll('.flex.space-x-6 svg')
    expect(socialIcons).toHaveLength(2)
    
    socialIcons.forEach(icon => {
      expect(icon.classes()).toContain('h-6')
      expect(icon.classes()).toContain('w-6')
    })
  })

  it('スクリーンリーダー用のテキストが含まれること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const srOnlyElements = wrapper.findAll('.sr-only')
    expect(srOnlyElements.length).toBeGreaterThanOrEqual(3) // Footer heading + social media names
    
    const srTexts = srOnlyElements.map(el => el.text())
    expect(srTexts).toContain('Footer')
    expect(srTexts).toContain('Twitter')
    expect(srTexts).toContain('GitHub')
  })

  it('著作権表示が正しく表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const copyright = wrapper.find('.text-xs.leading-5.text-gray-400')
    expect(copyright.text()).toBe('© 2020 添加物スキャナー All rights reserved.')
  })

  it('フッターのレイアウトが正しく設定されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const footer = wrapper.find('footer')
    expect(footer.classes()).toContain('mt-16')
    expect(footer.classes()).toContain('bg-gray-900')
    expect(footer.classes()).toContain('sm:mt-32')
    expect(footer.attributes('aria-labelledby')).toBe('footer-heading')
  })

  it('グリッドレイアウトが正しく適用されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const gridContainer = wrapper.find('.xl\\:grid')
    expect(gridContainer.classes()).toContain('xl:grid-cols-3')
    expect(gridContainer.classes()).toContain('xl:gap-8')
  })

  it('リンクにホバースタイルが適用されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const solutionLinks = wrapper.findAll('.text-gray-300.hover\\:text-white')
    expect(solutionLinks.length).toBeGreaterThan(0)
    
    solutionLinks.forEach(link => {
      expect(link.classes()).toContain('text-sm')
      expect(link.classes()).toContain('leading-6')
      expect(link.classes()).toContain('text-gray-300')
      expect(link.classes()).toContain('hover:text-white')
    })
  })

  it('セクションタイトルのスタイルが正しく適用されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const sectionTitles = wrapper.findAll('h3')
    expect(sectionTitles).toHaveLength(2)
    
    sectionTitles.forEach(title => {
      expect(title.classes()).toContain('text-sm')
      expect(title.classes()).toContain('font-semibold')
      expect(title.classes()).toContain('leading-6')
      expect(title.classes()).toContain('text-white')
    })
  })

  it('境界線が正しく表示されること', async () => {
    const wrapper = await mountSuspended(Footer)
    
    const borderContainer = wrapper.find('.border-t.border-white\\/10')
    expect(borderContainer.exists()).toBe(true)
    expect(borderContainer.classes()).toContain('mt-8')
    expect(borderContainer.classes()).toContain('pt-8')
  })
})