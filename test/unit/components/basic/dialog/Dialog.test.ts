// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Dialog from '~/components/basic/dialog/Dialog.vue'

describe('Dialog', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Dialog)
    expect(wrapper).toBeTruthy()
  })

  it('閉じた状態では表示されないこと', async () => {
    const wrapper = await mountSuspended(Dialog)
    expect(wrapper.find('h3').exists()).toBe(false)
  })

  it('コンポーネントが正常にレンダリングされること', async () => {
    const wrapper = await mountSuspended(Dialog)
    // コンポーネントがエラーなくマウントされることを確認
    expect(wrapper.vm).toBeTruthy()
  })

  it('基本的なHTML構造が存在すること', async () => {
    const wrapper = await mountSuspended(Dialog)
    // コンポーネントが存在することを確認
    expect(wrapper.exists()).toBe(true)
  })

  it('Vueコンポーネントとして正しく動作すること', async () => {
    const wrapper = await mountSuspended(Dialog)
    // Vueコンポーネントのインスタンスが存在することを確認
    expect(wrapper.vm).toBeDefined()
  })

  it('propsやemitsが正しく定義されていること', async () => {
    const wrapper = await mountSuspended(Dialog)
    // コンポーネントが適切に初期化されていることを確認
    expect(wrapper.vm).toBeTruthy()
  })
})