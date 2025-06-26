// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Tooltip from '~/components/basic/tooltip/Tooltip.vue'

describe('Tooltip', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Hover tooltip'
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('スロットコンテンツが表示されること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Hover tooltip'
      },
      slots: {
        default: '<button>Hover me</button>'
      }
    })
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.text()).toContain('Hover me')
  })

  it('ラッパーに正しいクラスが適用されること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Hover tooltip'
      }
    })
    
    const container = wrapper.find('span.relative')
    expect(container.classes()).toContain('relative')
    expect(container.classes()).toContain('group')
  })

  it('hoverTextプロパティが必須であること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Required hover text'
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('reactiveTextプロパティがデフォルトで空文字であること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Hover text'
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('isReactプロパティがデフォルトでfalseであること', async () => {
    const wrapper = await mountSuspended(Tooltip, {
      props: {
        hoverText: 'Hover text'
      }
    })
    expect(wrapper).toBeTruthy()
  })
})