// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Icon from '../../../../../components/basic/icon/Icon.vue'

describe('Icon', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Icon, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('正しいクラスが設定されること', async () => {
    const wrapper = await mountSuspended(Icon, {
      route: '/test'
    })
    
    expect(wrapper.find('.w-6').exists()).toBe(true)
    expect(wrapper.find('.fill-current').exists()).toBe(true)
  })

  it('スロットの内容が表示されること', async () => {
    const iconContent = '<svg><path d="M10 10"/></svg>'
    const wrapper = await mountSuspended(Icon, {
      slots: {
        default: iconContent
      },
      route: '/test'
    })
    
    expect(wrapper.html()).toContain('<svg>')
    expect(wrapper.html()).toContain('<path d="M10 10"')
  })

  it('divタグが正しく描画されること', async () => {
    const wrapper = await mountSuspended(Icon, {
      route: '/test'
    })
    
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.classes()).toEqual(['w-6', 'fill-current'])
  })

  it('空のスロットでも正しく描画されること', async () => {
    const wrapper = await mountSuspended(Icon, {
      route: '/test'
    })
    
    const div = wrapper.find('div.w-6.fill-current')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('')
  })
});