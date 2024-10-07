// @vitest-environment nuxt
import { it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Range from '../../../../../components/basic/range/Range.vue'

// コンポーネントが正しくマウントされるかをテスト
it('can also mount an app', async () => {
  const component = await mountSuspended(Range, { route: '/test' })
  expect(component).toBeTruthy()
})

// プラスアイコンをクリックしたときにmodel値が増加するかをテスト
it('increments the model value when the plus icon is clicked', async () => {
  const component = await mountSuspended(Range, {
    props: {
      min: 0,
      max: 10,
    },
    route: '/test',
  })

  const plusIcon = component.findComponent({ name: 'PlusSolidIcon' })
  // @ts-ignore
  const model = component.vm.model

  // 初期値は0
  expect(model.value).toBe(0)

  // プラスアイコンをクリックしてmodel値が1に増加するかを確認
  await plusIcon.trigger('click')
  expect(model.value).toBe(1)

  // 再度プラスアイコンをクリックしてmodel値が2に増加するかを確認
  await plusIcon.trigger('click')
  expect(model.value).toBe(2)
})

// マイナスアイコンをクリックしたときにmodel値が減少するかをテスト
it('decrements the model value when the minus icon is clicked', async () => {
  const component = await mountSuspended(Range, {
    props: {
      min: 0,
      max: 10,
    },
    route: '/test',
  })

  const minusIcon = component.findComponent({ name: 'MinusSolidIcon' })
  const plusIcon = component.findComponent({ name: 'PlusSolidIcon' })
  // @ts-ignore
  const model = component.vm.model

  // 初期値は0
  expect(model.value).toBe(0)

  // プラスアイコンをクリックしてmodel値が1に増加するかを確認
  await plusIcon.trigger('click')
  expect(model.value).toBe(1)

  // マイナスアイコンをクリックしてmodel値が0に減少するかを確認
  await minusIcon.trigger('click')
  expect(model.value).toBe(0)
})

// model値がmin値以下に減少しないことをテスト
it('does not decrement the model value below the min value', async () => {
  const component = await mountSuspended(Range, {
    props: {
      min: 0,
      max: 10,
    },
    route: '/test',
  })

  const minusIcon = component.findComponent({ name: 'MinusSolidIcon' })
  // @ts-ignore
  const model = component.vm.model

  // 初期値は0
  expect(model.value).toBe(0)

  // マイナスアイコンをクリックしてもmodel値が0のままであることを確認
  await minusIcon.trigger('click')
  expect(model.value).toBe(0)
})

// model値がmax値以上に増加しないことをテスト
it('does not increment the model value above the max value', async () => {
  const component = await mountSuspended(Range, {
    props: {
      min: 0,
      max: 10,
    },
    route: '/test',
  })

  const plusIcon = component.findComponent({ name: 'PlusSolidIcon' })
  // @ts-ignore
  const model = component.vm.model

  // model値を10に設定
  model.value = 10
  await component.vm.$nextTick()

  // 初期値は10
  expect(model.value).toBe(10)

  // プラスアイコンをクリックしてもmodel値が10のままであることを確認
  await plusIcon.trigger('click')
  expect(model.value).toBe(10)
})
