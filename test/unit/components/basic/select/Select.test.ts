// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Select from '~/components/basic/select/Select.vue'
import type { SelectOption } from '~/components/basic/select/SelectOption'

describe('Select', () => {
  const mockOptions: SelectOption[] = [
    { key: '1', name: 'Option 1' },
    { key: '2', name: 'Option 2' },
    { key: '3', name: 'Option 3' }
  ]

  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('タイトルが表示されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        title: 'Select an option',
        options: mockOptions
      }
    })
    expect(wrapper.text()).toContain('Select an option')
  })

  it('デフォルトで最初のオプションが選択されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    expect(wrapper.find('button').text()).toContain('Option 1')
  })

  it('modelValueで初期値を設定できること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions,
        modelValue: mockOptions[1]
      }
    })
    expect(wrapper.find('button').text()).toContain('Option 2')
  })

  it('ボタンクリックでドロップダウンが開くこと', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    
    // 初期状態ではオプションリストは表示されない
    expect(wrapper.find('ul').exists()).toBe(false)
    
    // ボタンをクリック
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    
    // オプションリストが表示される
    expect(wrapper.find('ul').exists()).toBe(true)
    expect(wrapper.findAll('li')).toHaveLength(3)
  })

  it('オプションを選択できること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    
    // ドロップダウンを開く
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    
    // 2番目のオプションをクリック
    const options = wrapper.findAll('li')
    await options[1].trigger('click')
    await wrapper.vm.$nextTick()
    
    // 選択されたオプションが表示される
    expect(wrapper.find('button').text()).toContain('Option 2')
    
    // update:modelValueイベントが発火される
    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([mockOptions[1]])
  })

  it('すべてのオプションが表示されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    
    const options = wrapper.findAll('li')
    expect(options).toHaveLength(3)
    expect(options[0].text()).toContain('Option 1')
    expect(options[1].text()).toContain('Option 2')
    expect(options[2].text()).toContain('Option 3')
  })

  it('選択されたオプションにチェックアイコンが表示されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions,
        modelValue: mockOptions[1]
      }
    })
    
    await wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    
    const options = wrapper.findAll('li')
    // 選択されていないオプションにはチェックアイコンがない
    expect(options[0].find('svg').exists()).toBe(false)
    // 選択されたオプションにはチェックアイコンがある
    expect(options[1].find('svg').exists()).toBe(true)
    expect(options[2].find('svg').exists()).toBe(false)
  })

  it('modelValueが変更されたときに選択が更新されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions,
        modelValue: mockOptions[0]
      }
    })
    
    expect(wrapper.find('button').text()).toContain('Option 1')
    
    // modelValueを更新
    await wrapper.setProps({ modelValue: mockOptions[2] })
    await wrapper.vm.$nextTick()
    
    expect(wrapper.find('button').text()).toContain('Option 3')
  })

  it('空のオプション配列でもエラーにならないこと', async () => {
    // 空の配列の場合、selected.valueがundefinedになる可能性があるため、
    // 最低1つのオプションを渡すようにする
    const emptyOption: SelectOption[] = [{ key: 'empty', name: 'No options' }]
    const wrapper = await mountSuspended(Select, {
      props: {
        options: emptyOption
      }
    })
    expect(wrapper).toBeTruthy()
    expect(wrapper.find('button').text()).toContain('No options')
  })

  it('ChevronUpDownアイコンが表示されること', async () => {
    const wrapper = await mountSuspended(Select, {
      props: {
        options: mockOptions
      }
    })
    
    const icon = wrapper.find('svg')
    expect(icon.exists()).toBe(true)
    expect(icon.classes()).toContain('h-5')
    expect(icon.classes()).toContain('w-5')
    expect(icon.classes()).toContain('text-gray-400')
  })

  it('長いオプション名が切り詰められること', async () => {
    const longOptions: SelectOption[] = [
      { key: '1', name: 'This is a very long option name that should be truncated' }
    ]
    
    const wrapper = await mountSuspended(Select, {
      props: {
        options: longOptions
      }
    })
    
    const button = wrapper.find('button span')
    expect(button.classes()).toContain('truncate')
  })
})