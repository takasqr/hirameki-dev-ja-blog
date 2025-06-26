// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Card from '../../../../../components/basic/card/Card.vue'

describe('Card', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Card, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('デフォルトクラスが正しく設定されること', async () => {
    const wrapper = await mountSuspended(Card, {
      route: '/test'
    })
    
    expect(wrapper.find('.bg-white').exists()).toBe(true)
    expect(wrapper.find('.border').exists()).toBe(true)
    expect(wrapper.find('.border-solid').exists()).toBe(true)
    expect(wrapper.find('.border-gray-300').exists()).toBe(true)
    expect(wrapper.find('.rounded-lg').exists()).toBe(true)
  })

  it('カスタムクラスが正しく適用されること', async () => {
    const customClasses = {
      base: 'bg-blue-500 p-4 rounded-xl'
    }
    
    const wrapper = await mountSuspended(Card, {
      props: {
        classes: customClasses
      },
      route: '/test'
    })
    
    expect(wrapper.find('.bg-blue-500').exists()).toBe(true)
    expect(wrapper.find('.p-4').exists()).toBe(true)
    expect(wrapper.find('.rounded-xl').exists()).toBe(true)
  })

  it('スロットの内容が表示されること', async () => {
    const wrapper = await mountSuspended(Card, {
      slots: {
        default: '<p>カード内容</p>'
      },
      route: '/test'
    })
    
    expect(wrapper.html()).toContain('<p>カード内容</p>')
  })

  it('複雑な内容をスロットに渡せること', async () => {
    const complexContent = `
      <div class="card-header">
        <h2>タイトル</h2>
      </div>
      <div class="card-body">
        <p>本文</p>
      </div>
    `
    
    const wrapper = await mountSuspended(Card, {
      slots: {
        default: complexContent
      },
      route: '/test'
    })
    
    expect(wrapper.find('.card-header').exists()).toBe(true)
    expect(wrapper.find('.card-body').exists()).toBe(true)
    expect(wrapper.text()).toContain('タイトル')
    expect(wrapper.text()).toContain('本文')
  })
});