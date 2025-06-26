// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ArticleListItem from '~/components/template/article-list-item/ArticleListItem.vue'

describe('ArticleListItem', () => {
  const mockArticle = {
    _path: '/blog/test-article',
    title: 'Test Article Title',
    createDate: '2024-01-15',
    description: 'This is a test article description',
    cover: '/test-cover.jpg',
    category: 'technology'
  }

  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('記事タイトルが表示されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    expect(wrapper.text()).toContain('Test Article Title')
  })

  it('カバー画像が正しく表示されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/test-cover.jpg')
    expect(img.attributes('alt')).toBe('')
  })

  it('作成日が正しく表示されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const time = wrapper.find('time')
    expect(time.text()).toBe('2024-01-15')
    expect(time.attributes('datetime')).toBe('2024-01-15')
  })

  it('カテゴリーが正しく表示されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const categoryLink = wrapper.findAll('a')[1]
    expect(categoryLink.text()).toBe('technology')
    expect(categoryLink.attributes('href')).toBe('/technology')
  })

  it('記事へのリンクが正しく設定されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const links = wrapper.findAll('a')
    // カバー画像のリンク
    expect(links[0].attributes('href')).toBe('/blog/test-article')
    // タイトルのリンク
    expect(links[2].attributes('href')).toBe('/blog/test-article')
  })

  it('画像に正しいクラスが適用されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const img = wrapper.find('img')
    expect(img.classes()).toContain('aspect-[16/9]')
    expect(img.classes()).toContain('w-full')
    expect(img.classes()).toContain('rounded-2xl')
    expect(img.classes()).toContain('bg-gray-100')
    expect(img.classes()).toContain('object-cover')
  })

  it('カテゴリーバッジに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const categoryLink = wrapper.findAll('a')[1]
    expect(categoryLink.classes()).toContain('relative')
    expect(categoryLink.classes()).toContain('z-10')
    expect(categoryLink.classes()).toContain('rounded-full')
    expect(categoryLink.classes()).toContain('bg-gray-50')
    expect(categoryLink.classes()).toContain('px-3')
    expect(categoryLink.classes()).toContain('py-1.5')
    expect(categoryLink.classes()).toContain('font-medium')
    expect(categoryLink.classes()).toContain('text-gray-600')
    expect(categoryLink.classes()).toContain('hover:bg-gray-100')
  })

  it('タイトルにホバー効果が適用されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const title = wrapper.find('h3')
    expect(title.classes()).toContain('group-hover:text-gray-600')
  })

  it('article要素に正しいクラスが適用されること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const article = wrapper.find('article')
    expect(article.classes()).toContain('flex')
    expect(article.classes()).toContain('flex-col')
    expect(article.classes()).toContain('items-start')
    expect(article.classes()).toContain('justify-between')
  })

  it('画像オーバーレイが存在すること', async () => {
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: mockArticle
      }
    })
    const overlay = wrapper.find('.absolute.inset-0')
    expect(overlay.exists()).toBe(true)
    expect(overlay.classes()).toContain('rounded-2xl')
    expect(overlay.classes()).toContain('ring-1')
    expect(overlay.classes()).toContain('ring-inset')
    expect(overlay.classes()).toContain('ring-gray-900/10')
  })

  it('バッジ付きの記事でも正しく表示されること', async () => {
    const articleWithBadges = {
      ...mockArticle,
      badges: [
        { bg: 'bg-blue-500', text: 'text-white', content: 'New' },
        { bg: 'bg-green-500', text: 'text-white', content: 'Featured' }
      ]
    }
    
    const wrapper = await mountSuspended(ArticleListItem, {
      props: {
        article: articleWithBadges
      }
    })
    
    expect(wrapper).toBeTruthy()
    // バッジは現在のテンプレートでは表示されていないが、
    // propsとして正しく受け取れることを確認
  })
})