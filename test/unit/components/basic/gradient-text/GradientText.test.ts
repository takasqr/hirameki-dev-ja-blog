// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import GradientText from '../../../../../components/basic/gradient-text/GradientText.vue'

describe('GradientText', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(GradientText, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('グラデーションクラスが正しく設定されること', async () => {
    const wrapper = await mountSuspended(GradientText, {
      route: '/test'
    })
    
    expect(wrapper.find('.bg-gradient-to-r').exists()).toBe(true)
    expect(wrapper.find('.from-indigo-500').exists()).toBe(true)
    expect(wrapper.find('.via-purple-500').exists()).toBe(true)
    expect(wrapper.find('.to-pink-500').exists()).toBe(true)
    expect(wrapper.find('.text-transparent').exists()).toBe(true)
    expect(wrapper.find('.bg-clip-text').exists()).toBe(true)
    expect(wrapper.find('.inline-block').exists()).toBe(true)
  })

  it('スロットの内容が表示されること', async () => {
    const wrapper = await mountSuspended(GradientText, {
      slots: {
        default: 'グラデーションテキスト'
      },
      route: '/test'
    })
    
    expect(wrapper.text()).toContain('グラデーションテキスト')
  })

  it('pタグが正しく描画されること', async () => {
    const wrapper = await mountSuspended(GradientText, {
      route: '/test'
    })
    
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
  })

  it('複数単語のテキストが正しく表示されること', async () => {
    const text = 'これは美しいグラデーション効果のテキストです'
    const wrapper = await mountSuspended(GradientText, {
      slots: {
        default: text
      },
      route: '/test'
    })
    
    expect(wrapper.text()).toBe(text)
  })

  it('HTMLエンティティが正しく処理されること', async () => {
    const wrapper = await mountSuspended(GradientText, {
      slots: {
        default: 'A &amp; B'
      },
      route: '/test'
    })
    
    expect(wrapper.text()).toContain('A & B')
  })
});