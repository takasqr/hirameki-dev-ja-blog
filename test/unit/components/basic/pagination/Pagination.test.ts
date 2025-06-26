// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Pagination from '~/components/basic/pagination/Pagination.vue'

describe('Pagination', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Pagination)
    expect(wrapper).toBeTruthy()
  })

  it('モバイルビューで前後のボタンが表示されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const mobileContainer = wrapper.find('.sm\\:hidden')
    expect(mobileContainer.exists()).toBe(true)
    
    const mobileButtons = mobileContainer.findAll('a')
    expect(mobileButtons).toHaveLength(2)
    expect(mobileButtons[0].text()).toBe('Previous')
    expect(mobileButtons[1].text()).toBe('Next')
  })

  it('デスクトップビューでページ番号が表示されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const desktopContainer = wrapper.find('.hidden.sm\\:flex')
    expect(desktopContainer.exists()).toBe(true)
    
    const nav = desktopContainer.find('nav')
    expect(nav.exists()).toBe(true)
    expect(nav.attributes('aria-label')).toBe('Pagination')
  })

  it('現在のページがハイライトされること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const currentPage = wrapper.find('[aria-current="page"]')
    expect(currentPage.exists()).toBe(true)
    expect(currentPage.text()).toBe('1')
    expect(currentPage.classes()).toContain('bg-indigo-600')
    expect(currentPage.classes()).toContain('text-white')
  })

  it('ページ番号が正しく表示されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const nav = wrapper.find('nav')
    const pageNumbers = nav.text()
    
    expect(pageNumbers).toContain('1')
    expect(pageNumbers).toContain('2')
    expect(pageNumbers).toContain('3')
    expect(pageNumbers).toContain('...')
    expect(pageNumbers).toContain('8')
    expect(pageNumbers).toContain('9')
    expect(pageNumbers).toContain('10')
  })

  it('前へ・次へのアイコンが表示されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const icons = wrapper.findAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(2)
    
    // アイコンのサイズクラスを確認
    icons.forEach(icon => {
      expect(icon.classes()).toContain('h-5')
      expect(icon.classes()).toContain('w-5')
    })
  })

  it('スクリーンリーダー用のテキストが含まれること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const srOnlyElements = wrapper.findAll('.sr-only')
    expect(srOnlyElements.length).toBeGreaterThanOrEqual(2)
    
    const srTexts = srOnlyElements.map(el => el.text())
    expect(srTexts).toContain('Previous')
    expect(srTexts).toContain('Next')
  })

  it('モバイルボタンに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const mobileButtons = wrapper.find('.sm\\:hidden').findAll('a')
    mobileButtons.forEach(button => {
      expect(button.classes()).toContain('relative')
      expect(button.classes()).toContain('inline-flex')
      expect(button.classes()).toContain('items-center')
      expect(button.classes()).toContain('rounded-md')
      expect(button.classes()).toContain('border')
      expect(button.classes()).toContain('border-gray-300')
      expect(button.classes()).toContain('bg-white')
      expect(button.classes()).toContain('px-4')
      expect(button.classes()).toContain('py-2')
      expect(button.classes()).toContain('text-sm')
      expect(button.classes()).toContain('font-medium')
      expect(button.classes()).toContain('text-gray-700')
      expect(button.classes()).toContain('hover:bg-gray-50')
    })
  })

  it('デスクトップページリンクに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    // より柔軟なセレクターで通常のページリンクを取得
    const allLinks = wrapper.findAll('a')
    const regularPageLinks = allLinks.filter(link => 
      link.text().match(/^\d+$/) // 数字のみのテキストを持つリンク
    )
    
    expect(regularPageLinks.length).toBeGreaterThan(0)
    
    regularPageLinks.forEach(link => {
      expect(link.classes()).toContain('relative')
      expect(link.classes()).toContain('px-4')
      expect(link.classes()).toContain('py-2')
      expect(link.classes()).toContain('text-sm')
      expect(link.classes()).toContain('font-semibold')
    })
  })

  it('省略記号が正しく表示されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const ellipsis = wrapper.find('span.text-gray-700')
    expect(ellipsis.exists()).toBe(true)
    expect(ellipsis.text()).toBe('...')
    expect(ellipsis.classes()).toContain('relative')
    expect(ellipsis.classes()).toContain('inline-flex')
    expect(ellipsis.classes()).toContain('items-center')
  })

  it('最初と最後のボタンに角丸が適用されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    const nav = wrapper.find('nav')
    const links = nav.findAll('a')
    
    // 最初のリンク（前へボタン）
    expect(links[0].classes()).toContain('rounded-l-md')
    
    // 最後のリンク（次へボタン）
    expect(links[links.length - 1].classes()).toContain('rounded-r-md')
  })

  it('レスポンシブクラスが正しく適用されること', async () => {
    const wrapper = await mountSuspended(Pagination)
    
    // ページ3とページ8に md:inline-flex クラスがあることを確認
    const hiddenOnSmall = wrapper.findAll('.hidden.md\\:inline-flex')
    expect(hiddenOnSmall.length).toBeGreaterThan(0)
  })
})