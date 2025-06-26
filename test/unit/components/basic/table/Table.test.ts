// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Table from '~/components/basic/table/Table.vue'

describe('Table', () => {
  it('エラーなしでマウントできること', async () => {
    const wrapper = await mountSuspended(Table)
    expect(wrapper).toBeTruthy()
  })

  it('デフォルトデータが表示されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    expect(wrapper.text()).toContain('data1')
    expect(wrapper.text()).toContain('content1')
    expect(wrapper.text()).toContain('data2')
    expect(wrapper.text()).toContain('content2')
  })

  it('正しい構造でレンダリングされること', async () => {
    const wrapper = await mountSuspended(Table)
    
    // メインコンテナの確認
    expect(wrapper.find('.border-t').exists()).toBe(true)
    expect(wrapper.find('.border-gray-100').exists()).toBe(true)
    
    // dlタグの確認
    const dl = wrapper.find('dl')
    expect(dl.exists()).toBe(true)
    expect(dl.classes()).toContain('divide-y')
    expect(dl.classes()).toContain('divide-gray-100')
  })

  it('各レコードが正しく表示されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    const records = wrapper.findAll('.px-4.py-6')
    expect(records).toHaveLength(2)
    
    // 最初のレコード
    const firstRecord = records[0]
    expect(firstRecord.find('dt').text()).toBe('data1')
    expect(firstRecord.find('dd').text()).toBe('content1')
    
    // 2番目のレコード
    const secondRecord = records[1]
    expect(secondRecord.find('dt').text()).toBe('data2')
    expect(secondRecord.find('dd').text()).toBe('content2')
  })

  it('タイトルに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    const titles = wrapper.findAll('dt')
    titles.forEach(title => {
      expect(title.classes()).toContain('text-sm')
      expect(title.classes()).toContain('font-medium')
      expect(title.classes()).toContain('leading-6')
      expect(title.classes()).toContain('text-gray-900')
    })
  })

  it('コンテンツに正しいスタイルが適用されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    const contents = wrapper.findAll('dd')
    contents.forEach(content => {
      expect(content.classes()).toContain('mt-1')
      expect(content.classes()).toContain('text-sm')
      expect(content.classes()).toContain('leading-6')
      expect(content.classes()).toContain('text-gray-700')
      expect(content.classes()).toContain('sm:col-span-2')
      expect(content.classes()).toContain('sm:mt-0')
    })
  })

  it('レスポンシブグリッドレイアウトが適用されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    const records = wrapper.findAll('.px-4.py-6')
    records.forEach(record => {
      expect(record.classes()).toContain('sm:grid')
      expect(record.classes()).toContain('sm:grid-cols-3')
      expect(record.classes()).toContain('sm:gap-4')
      expect(record.classes()).toContain('sm:px-0')
    })
  })

  it('上部マージンが正しく設定されること', async () => {
    const wrapper = await mountSuspended(Table)
    
    const container = wrapper.find('.mt-6')
    expect(container.exists()).toBe(true)
  })
})