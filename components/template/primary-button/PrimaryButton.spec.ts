// @vitest-environment nuxt
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import PrimaryButton from './PrimaryButton.vue';

describe('PrimaryButton', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(PrimaryButton, {
      slots: {
        default: 'Click Me'
      },
      route: '/test'
    });

    expect(wrapper.html()).toContain('Click Me');
    expect(wrapper.classes()).toContain('bg-gradient-to-r');
    expect(wrapper.classes()).toContain('from-primary');
  });
});
