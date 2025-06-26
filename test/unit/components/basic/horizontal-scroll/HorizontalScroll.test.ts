// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HorizontalScroll from '../../../../../components/basic/horizontal-scroll/HorizontalScroll.vue'

describe('HorizontalScroll', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(HorizontalScroll, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('必要なクラスが設定されること', async () => {
    const wrapper = await mountSuspended(HorizontalScroll, {
      route: '/test'
    })
    
    expect(wrapper.find('.flex').exists()).toBe(true)
    expect(wrapper.find('.overflow-scroll').exists()).toBe(true)
  })

  it('スロットの内容が表示されること', async () => {
    const content = `
      <div class="item">アイテム1</div>
      <div class="item">アイテム2</div>
      <div class="item">アイテム3</div>
    `
    
    const wrapper = await mountSuspended(HorizontalScroll, {
      slots: {
        default: content
      },
      route: '/test'
    })
    
    expect(wrapper.text()).toContain('アイテム1')
    expect(wrapper.text()).toContain('アイテム2')
    expect(wrapper.text()).toContain('アイテム3')
    expect(wrapper.findAll('.item')).toHaveLength(3)
  })

  it('divタグが正しく描画されること', async () => {
    const wrapper = await mountSuspended(HorizontalScroll, {
      route: '/test'
    })
    
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.classes()).toEqual(['flex', 'overflow-scroll'])
  })

  it('空のスロットでも正しく描画されること', async () => {
    const wrapper = await mountSuspended(HorizontalScroll, {
      route: '/test'
    })
    
    const div = wrapper.find('div.flex.overflow-scroll')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('')
  })
});