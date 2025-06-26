// @vitest-environment nuxt
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import TextArea from './TextArea.vue';

describe('TextArea', () => {
  it('renders correctly', async () => {
    const wrapper = await mountSuspended(TextArea, {
      props: {
        name: 'comment',
        placeholder: 'Add your comment...'
      },
      route: '/test'
    });

    expect(wrapper.find('div.overflow-hidden').exists()).toBe(true);

    const textarea = wrapper.find('textarea[name="comment"]');
    expect(textarea.exists()).toBe(true);
    expect(textarea.attributes('rows')).toBe('3');
    expect(textarea.attributes('placeholder')).toBe('Add your comment...');
  });
});
