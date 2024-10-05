import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SecondaryButton from './SecondaryButton.vue'; // コンポーネントのパスを適切に設定してください

describe('SecondaryButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(SecondaryButton, {
      slots: {
        default: 'Click Me'
      }
    });

    expect(wrapper.html()).toContain('Click Me');
    expect(wrapper.classes()).toContain('bg-gradient-to-r');
    expect(wrapper.classes()).toContain('from-primary');
  });
});
