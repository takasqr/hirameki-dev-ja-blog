// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Container from '../../../../../components/basic/container/Container.vue'

describe('Container', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Container, {
      route: '/test'
    })
    expect(wrapper).toBeTruthy()
  })

  it('正しいコンテナクラスが設定されること', async () => {
    const wrapper = await mountSuspended(Container, {
      route: '/test'
    })
    
    expect(wrapper.find('.mx-auto').exists()).toBe(true)
    expect(wrapper.find('.max-w-7xl').exists()).toBe(true)
    expect(wrapper.find('.px-4').exists()).toBe(true)
    expect(wrapper.find('.sm\\:px-6').exists()).toBe(true)
    expect(wrapper.find('.lg\\:px-8').exists()).toBe(true)
  })

  it('内側のコンテナクラスが設定されること', async () => {
    const wrapper = await mountSuspended(Container, {
      route: '/test'
    })
    
    const innerContainer = wrapper.find('.max-w-3xl')
    expect(innerContainer.exists()).toBe(true)
    expect(innerContainer.classes()).toContain('mx-auto')
  })

  it('スロットの内容が表示されること', async () => {
    const wrapper = await mountSuspended(Container, {
      slots: {
        default: '<p>テスト内容</p>'
      },
      route: '/test'
    })
    
    expect(wrapper.html()).toContain('テスト内容')
  })

  it('正しいDOM構造を持つこと', async () => {
    const wrapper = await mountSuspended(Container, {
      route: '/test'
    })
    
    const outerDiv = wrapper.find('div.mx-auto.max-w-7xl')
    expect(outerDiv.exists()).toBe(true)
    
    const innerDiv = wrapper.find('div.mx-auto.max-w-3xl')
    expect(innerDiv.exists()).toBe(true)
    
    // 内側のdivが外側のdivの子要素であることを確認
    expect(outerDiv.element.contains(innerDiv.element)).toBe(true)
  })
});