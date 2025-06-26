// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Text from '../../../../../components/basic/text/Text.vue'

describe('Text', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Text, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('スロットの内容が表示されること', async () => {
    const wrapper = await mountSuspended(Text, {
      slots: {
        default: 'テキスト内容'
      },
      route: '/test'
    })
    
    expect(wrapper.html()).toContain('テキスト内容')
  })

  it('pタグが正しく描画されること', async () => {
    const wrapper = await mountSuspended(Text, {
      route: '/test'
    })
    
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
  })

  it('空のスロットでも正しく描画されること', async () => {
    const wrapper = await mountSuspended(Text, {
      route: '/test'
    })
    
    const p = wrapper.find('p')
    expect(p.exists()).toBe(true)
    expect(p.text()).toBe('')
  })

  it('複数行テキストが正しく表示されること', async () => {
    const multilineText = 'Line 1\nLine 2\nLine 3'
    const wrapper = await mountSuspended(Text, {
      slots: {
        default: multilineText
      },
      route: '/test'
    })
    
    expect(wrapper.text()).toContain('Line 1')
    expect(wrapper.text()).toContain('Line 2')
    expect(wrapper.text()).toContain('Line 3')
  })
});