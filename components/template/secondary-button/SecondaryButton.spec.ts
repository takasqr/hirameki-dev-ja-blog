// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import SecondaryButton from './SecondaryButton.vue';

describe('SecondaryButton', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(SecondaryButton, {
      slots: {
        default: 'Click Me'
      },
      route: '/test'
    });

    expect(wrapper.text()).toBe('Click Me');
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button').classes()).toContain('font-bold');
  });
});
