// Checkbox.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Checkbox from './Checkbox.vue';

// コンポーネントのレンダリングをテスト
describe('Checkbox.vue', () => {
  it('タイトルを props 経由で受け取り、表示する', () => {
    const title = 'コメントを受け取る';
    const wrapper = mount(Checkbox, {
      props: { title },
    });

    // props 経由で渡したタイトルが正しく表示されていることを確認
    expect(wrapper.text()).toContain(title);
  });

  it('チェックボックスが正しくレンダリングされる', () => {
    const wrapper = mount(Checkbox, {
      props: {
        title: 'テストタイトル',
      },
    });

    // input 要素が存在することを確認
    expect(wrapper.find('input[type="checkbox"]').exists()).toBeTruthy();
  });

  // it('チェックボックスがユーザーの操作に応じて状態が変化する', async () => {
  //   const wrapper = mount(Checkbox, {
  //     props: {
  //       title: 'インタラクティブテスト',
  //     },
  //   });

  //   // チェックボックスを見つけて、クリックする
  //   const checkbox = wrapper.find('input[type="checkbox"]');
  //   await checkbox.setValue(true);

  //   // チェックボックスがチェックされたことを確認
  //   expect(checkbox.element.checked).toBeTruthy();
  // });

  it('スロットを介して追加の内容をレンダリングできる', () => {
    const wrapper = mount(Checkbox, {
      props: {
        title: 'スロットテスト',
      },
      slots: {
        default: '<p class="additional-content">追加の内容</p>',
      },
    });

    // スロット経由で渡された追加の内容がレンダリングされていることを確認
    expect(wrapper.find('.additional-content').exists()).toBeTruthy();
    expect(wrapper.text()).toContain('追加の内容');
  });
});
