import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TextArea from './TextArea.vue'; // コンポーネントのパスを適切に設定してください

describe('TextArea', () => {
  it('renders correctly', () => {
    const wrapper = mount(TextArea);

    // コンポーネントが正しくレンダリングされるか確認
    expect(wrapper.find('div.overflow-hidden').exists()).toBe(true);

    // テキストエリアが存在し、正しい属性を持つことを確認
    const textarea = wrapper.find('textarea[name="comment"]');
    expect(textarea.exists()).toBe(true);
    expect(textarea.attributes('rows')).toBe('3');
    expect(textarea.attributes('placeholder')).toBe('Add your comment...');
  });
});
