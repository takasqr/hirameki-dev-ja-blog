// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import TextField from '~/components/basic/text-field/TextField.vue'

describe('TextField', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id'
      }
    })
    expect(wrapper).toBeTruthy()
  })

  it('ラベルが正しく表示されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        label: 'Test Label'
      }
    })
    expect(wrapper.find('label').text()).toBe('Test Label')
  })

  it('プレースホルダーが正しく設定されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        placeholder: 'Enter text here'
      }
    })
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter text here')
  })

  it('値が正しく設定されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'Test Value'
      }
    })
    expect(wrapper.find('input').element.value).toBe('Test Value')
  })

  it('必須フィールドが正しく設定されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        required: true
      }
    })
    expect(wrapper.find('input').attributes('required')).toBeDefined()
  })

  it('type属性が正しく設定されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        type: 'email'
      }
    })
    expect(wrapper.find('input').attributes('type')).toBe('email')
  })

  it('autocomplete属性が正しく設定されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        autocomplete: 'email'
      }
    })
    expect(wrapper.find('input').attributes('autocomplete')).toBe('email')
  })

  it('サイズが正しく適用されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        size: 'lg'
      }
    })
    expect(wrapper.find('input').classes()).toContain('text-lg')
  })

  it('デフォルトサイズがbaseであること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id'
      }
    })
    expect(wrapper.find('input').classes()).toContain('text-base')
  })

  it('inputイベントが発火されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id'
      }
    })
    const input = wrapper.find('input')
    await input.trigger('input')
    expect(wrapper.emitted()).toHaveProperty('input')
  })

  it('changeイベントが発火されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id'
      }
    })
    const input = wrapper.find('input')
    await input.setValue('new value')
    await input.trigger('change')
    expect(wrapper.emitted()).toHaveProperty('change')
  })

  it('バリデーションルールが機能すること', async () => {
    const rules = [
      (value: string) => !!value || 'Required',
      (value: string) => value.length >= 3 || 'Min 3 characters'
    ]
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'ab',
        rules
      }
    })
    expect(wrapper.text()).toContain('Min 3 characters')
  })

  it('バリデーション成功時にエラーメッセージが表示されないこと', async () => {
    const rules = [
      (value: string) => !!value || 'Required',
      (value: string) => value.length >= 3 || 'Min 3 characters'
    ]
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'abc',
        rules
      }
    })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('入力時にバリデーションが実行されること', async () => {
    const rules = [
      (value: string) => !!value || 'Required'
    ]
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        rules
      }
    })
    const input = wrapper.find('input')
    await input.setValue('')
    await input.trigger('input')
    expect(wrapper.text()).toContain('Required')
  })

  it('有効な入力でエラーメッセージがクリアされること', async () => {
    const rules = [
      (value: string) => !!value || 'Required'
    ]
    
    // まず空の値でマウントしてエラーメッセージを確認
    let wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: '',
        rules
      }
    })
    expect(wrapper.text()).toContain('Required')
    
    // 次に有効な値でマウントしてエラーメッセージがないことを確認
    wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'valid input',
        rules
      }
    })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('カスタムクラスが適用されること', async () => {
    const customClasses = {
      label: {
        base: 'custom-label-class'
      },
      content: {
        input: {
          base: 'custom-input-class'
        }
      }
    }
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        label: 'Test',
        classes: customClasses
      }
    })
    expect(wrapper.find('label').classes()).toContain('custom-label-class')
    expect(wrapper.find('input').classes()).toContain('custom-input-class')
  })

  it('デフォルトクラスが適用されること', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        label: 'Test'
      }
    })
    expect(wrapper.find('label').classes()).toContain('block')
    expect(wrapper.find('label').classes()).toContain('text-xs')
    expect(wrapper.find('input').classes()).toContain('block')
    expect(wrapper.find('input').classes()).toContain('w-full')
  })

  it('複数のバリデーションルールが順番に評価されること', async () => {
    const rules = [
      (value: string) => !!value || 'Required',
      (value: string) => value.length >= 3 || 'Min 3 characters',
      (value: string) => value.length <= 5 || 'Max 5 characters'
    ]
    let wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: '',
        rules
      }
    })
    expect(wrapper.text()).toContain('Required')

    // 新しいpropsで再マウント
    wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'ab',
        rules
      }
    })
    expect(wrapper.text()).toContain('Min 3 characters')

    wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'abcdef',
        rules
      }
    })
    expect(wrapper.text()).toContain('Max 5 characters')

    wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: 'abcd',
        rules
      }
    })
    expect(wrapper.find('p').exists()).toBe(false)
  })

  it('ルールがない場合はバリデーションが実行されないこと', async () => {
    const wrapper = await mountSuspended(TextField, {
      props: {
        name: 'test-field',
        id: 'test-field-id',
        value: ''
      }
    })
    expect(wrapper.find('p').exists()).toBe(false)
  })
})