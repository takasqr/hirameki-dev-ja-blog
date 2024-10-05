import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PrimaryButton from './PrimaryButton.vue'; // コンポーネントのパスを適切に設定してください

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(PrimaryButton, {
      slots: {
        default: 'Click Me'
      }
    });

    expect(wrapper.html()).toContain('Click Me');
    expect(wrapper.classes()).toContain('bg-gradient-to-r');
    expect(wrapper.classes()).toContain('from-primary');
  });
});
