import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'; // コンポーネントのパスを適切に設定してください

describe('PrimaryButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Click Me'
      }
    });

    expect(wrapper.html()).toContain('Click Me');
    expect(wrapper.classes()).toContain('bg-gradient-to-r');
    expect(wrapper.classes()).toContain('from-primary');
  });
});
