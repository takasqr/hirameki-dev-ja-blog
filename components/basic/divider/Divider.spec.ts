// @vitest-environment nuxt
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Divider from './Divider.vue';

describe('Divider', () => {
  it('renders properly', async () => {
    const wrapper = await mountSuspended(Divider, {
      route: '/test'
    });
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('relative');
  });

  it('displays slot content', async () => {
    const slotContent = 'テストコンテンツ';
    const wrapper = await mountSuspended(Divider, {
      slots: {
        default: () => slotContent,
      },
      route: '/test'
    });
    expect(wrapper.text()).toContain(slotContent);
  });

  it('applies border class correctly', async () => {
    const wrapper = await mountSuspended(Divider, {
      route: '/test'
    });
    const border = wrapper.find('.border-t');
    expect(border.exists()).toBeTruthy();
    expect(border.classes()).toContain('border-gray-300');
  });

  it('applies text color and size classes correctly', async () => {
    const wrapper = await mountSuspended(Divider, {
      route: '/test'
    });
    const text = wrapper.find('.text-sm');
    expect(text.exists()).toBeTruthy();
    expect(text.classes()).toContain('text-gray-500');
    expect(text.classes()).toContain('bg-white');
  });
});
