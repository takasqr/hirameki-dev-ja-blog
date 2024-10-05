// Divider.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Divider from './Divider.vue';

// コンポーネントのテストを記述します
describe('Divider', () => {
  // コンポーネントが正しくレンダリングされるかテスト
  it('renders properly', () => {
    const wrapper = mount(Divider);
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('relative');
  });

  // スロットを通じて渡された内容が正しく表示されるかテスト
  it('displays slot content', () => {
    const slotContent = 'テストコンテンツ';
    const wrapper = mount(Divider, {
      slots: {
        default: slotContent,
      },
    });
    expect(wrapper.text()).toContain(slotContent);
  });

  // ボーダーのクラスが適用されているかテスト
  it('applies border class correctly', () => {
    const wrapper = mount(Divider);
    const border = wrapper.find('.border-t');
    expect(border.exists()).toBeTruthy();
    expect(border.classes()).toContain('border-gray-300');
  });

  // テキスト色とサイズのクラスが適用されているかテスト
  it('applies text color and size classes correctly', () => {
    const wrapper = mount(Divider);
    const text = wrapper.find('.text-sm');
    expect(text.exists()).toBeTruthy();
    expect(text.classes()).toContain('text-gray-500');
    expect(text.classes()).toContain('bg-white');
  });
});
