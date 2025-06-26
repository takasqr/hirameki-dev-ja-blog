// @vitest-environment nuxt
import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';
import Checkbox from './Checkbox.vue';

describe('Checkbox.vue', () => {
  it('タイトルを props 経由で受け取り、表示する', async () => {
    const title = 'コメントを受け取る';
    const wrapper = await mountSuspended(Checkbox, {
      props: { title },
      route: '/test'
    });

    expect(wrapper.text()).toContain(title);
  });

  it('チェックボックスが正しくレンダリングされる', async () => {
    const wrapper = await mountSuspended(Checkbox, {
      props: {
        title: 'テストタイトル',
      },
      route: '/test'
    });

    expect(wrapper.find('input[type="checkbox"]').exists()).toBeTruthy();
  });

  it('スロットを介して追加の内容をレンダリングできる', async () => {
    const wrapper = await mountSuspended(Checkbox, {
      props: {
        title: 'スロットテスト',
      },
      slots: {
        default: '<p class="additional-content">追加の内容</p>',
      },
      route: '/test'
    });

    expect(wrapper.find('.additional-content').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('追加の内容');
  });
});
