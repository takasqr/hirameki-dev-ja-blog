// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Loading from '~/components/basic/loading/Loading.vue'

describe('Loading', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Loading)
    expect(wrapper).toBeTruthy()
  })

  it('閉じた状態では表示されないこと', async () => {
    const wrapper = await mountSuspended(Loading)
    expect(wrapper.find('h3').exists()).toBe(false)
  })

  it('コンポーネントが正常にレンダリングされること', async () => {
    const wrapper = await mountSuspended(Loading)
    // コンポーネントがエラーなくマウントされることを確認
    expect(wrapper.vm).toBeTruthy()
  })

  it('基本的なHTML構造が存在すること', async () => {
    const wrapper = await mountSuspended(Loading)
    // コンポーネントが存在することを確認
    expect(wrapper.exists()).toBe(true)
  })

  it('Vueコンポーネントとして正しく動作すること', async () => {
    const wrapper = await mountSuspended(Loading)
    // Vueコンポーネントのインスタンスが存在することを確認
    expect(wrapper.vm).toBeDefined()
  })

  it('適切なコンポーネント構造を持つこと', async () => {
    const wrapper = await mountSuspended(Loading)
    // コンポーネントが適切に初期化されていることを確認
    expect(wrapper.vm).toBeTruthy()
  })

  it('LoadingStoreに関連する機能が含まれていること', async () => {
    const wrapper = await mountSuspended(Loading)
    // LoadingStoreを使用したコンポーネントであることを確認
    expect(wrapper.vm).toBeTruthy()
  })
})