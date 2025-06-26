// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ArticleList from '~/components/template/article-list/ArticleList.vue'

describe('ArticleList', () => {
  const mockArticles = [
    {
      _path: '/blog/article1',
      title: 'Article 1',
      createDate: '2024-01-01',
      description: 'Description 1',
      cover: '/cover1.jpg',
      category: 'tech'
    },
    {
      _path: '/blog/article2',
      title: 'Article 2',
      createDate: '2024-01-02',
      description: 'Description 2',
      cover: '/cover2.jpg',
      category: 'design',
      badges: [{ bg: 'bg-blue-500', text: 'text-white', content: 'New' }]
    },
    {
      _path: '/blog/article3',
      title: 'Article 3',
      createDate: '2024-01-03',
      description: 'Description 3',
      cover: '/cover3.jpg',
      category: 'tech'
    }
  ]

  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: mockArticles
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('正しい数の記事が表示されること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: mockArticles
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    
    const items = wrapper.findAll('.relative')
    expect(items).toHaveLength(3)
  })

  it('各記事にArticleListItemコンポーネントが使用されること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: mockArticles
      },
      global: {
        stubs: {
          ArticleListItem: { template: '<div class="article-list-item-stub">{{ article.title }}</div>', props: ['article'] }
        }
      }
    })
    
    const items = wrapper.findAll('.article-list-item-stub')
    expect(items).toHaveLength(3)
    expect(items[0].text()).toBe('Article 1')
    expect(items[1].text()).toBe('Article 2')
    expect(items[2].text()).toBe('Article 3')
  })

  it('グリッドレイアウトが正しく適用されること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: mockArticles
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    
    const grid = wrapper.find('.grid')
    expect(grid.classes()).toContain('grid-cols-2')
    expect(grid.classes()).toContain('gap-x-4')
    expect(grid.classes()).toContain('gap-y-8')
    expect(grid.classes()).toContain('sm:grid-cols-3')
    expect(grid.classes()).toContain('sm:gap-x-6')
    expect(grid.classes()).toContain('lg:grid-cols-4')
    expect(grid.classes()).toContain('xl:gap-x-8')
  })

  it('空の記事配列でもエラーにならないこと', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: []
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    
    expect(wrapper).toBeTruthy()
    const items = wrapper.findAll('.relative')
    expect(items).toHaveLength(0)
  })

  it('記事のキーが正しく設定されること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: mockArticles
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    
    // v-forのkey属性は直接テストできないため、
    // 正しい数の要素がレンダリングされることで間接的に確認
    const items = wrapper.findAll('.relative')
    expect(items).toHaveLength(mockArticles.length)
  })

  it('1つの記事でも正しく表示されること', async () => {
    const singleArticle = [mockArticles[0]]
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: singleArticle
      },
      global: {
        stubs: {
          ArticleListItem: true
        }
      }
    })
    
    const items = wrapper.findAll('.relative')
    expect(items).toHaveLength(1)
  })

  it('バッジ付きの記事も正しく渡されること', async () => {
    const wrapper = await mountSuspended(ArticleList, {
      props: {
        articles: [mockArticles[1]] // バッジ付きの記事
      },
      global: {
        stubs: {
          ArticleListItem: {
            template: '<div>{{ article.badges ? "Has badges" : "No badges" }}</div>',
            props: ['article']
          }
        }
      }
    })
    
    expect(wrapper.text()).toContain('Has badges')
  })
})