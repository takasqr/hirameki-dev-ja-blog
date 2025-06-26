// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Button from './Button.vue'

describe('Button', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(Button, {
      slots: {
        default: 'Click Me'
      },
      route: '/test'
    });

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').classes()).toContain('font-bold');
    expect(wrapper.find('button').classes()).toContain('bg-white');
    expect(wrapper.find('button').classes()).toContain('rounded-full');
  });
});
