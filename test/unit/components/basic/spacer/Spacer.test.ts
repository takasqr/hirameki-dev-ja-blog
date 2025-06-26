// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Spacer from '../../../../../components/basic/spacer/Spacer.vue'

describe('Spacer', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Spacer, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('正しいスペーシングクラスが設定されること', async () => {
    const wrapper = await mountSuspended(Spacer, {
      route: '/test'
    })
    
    expect(wrapper.find('.px-4').exists()).toBe(true)
    expect(wrapper.find('.py-4').exists()).toBe(true)
  })

  it('スロットの内容が表示されること', async () => {
    const wrapper = await mountSuspended(Spacer, {
      slots: {
        default: '<p>スペーサー内容</p>'
      },
      route: '/test'
    })
    
    expect(wrapper.html()).toContain('スペーサー内容')
  })

  it('divタグが正しく描画されること', async () => {
    const wrapper = await mountSuspended(Spacer, {
      route: '/test'
    })
    
    const div = wrapper.find('div')
    expect(div.exists()).toBe(true)
    expect(div.classes()).toEqual(['px-4', 'py-4'])
  })

  it('空のスロットでも正しく描画されること', async () => {
    const wrapper = await mountSuspended(Spacer, {
      route: '/test'
    })
    
    const div = wrapper.find('div.px-4.py-4')
    expect(div.exists()).toBe(true)
    expect(div.text()).toBe('')
  })
});