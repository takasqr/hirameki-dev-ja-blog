// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';
import TreeMenu from './TreeMenu.vue';
import {
  HomeIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  CurrencyYenIcon,
  CubeIcon,
  BookOpenIcon,
  MinusIcon
} from '@heroicons/vue/24/outline'

type TreeMenuProps = InstanceType<typeof TreeMenu>['$props']

const meta: Meta<typeof TreeMenu> = {
  component: TreeMenu,
};

export default meta;
type Story = StoryObj<typeof TreeMenu>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: TreeMenuProps) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { TreeMenu },
    template: '<TreeMenu :navigationItems="navigationItems"></TreeMenu>',
  }),
  args: {
    navigationItems: [
      { name: 'メニュー', href: '/menu', onClick: undefined, icon: HomeIcon, current: false },
      { name: 'リクエスト', href: '/request', icon: CubeIcon, current: false },
      { name: '履歴', href: '/history', icon: BookOpenIcon, current: false },
      { name: '支払い', href: '/payment', icon: CurrencyYenIcon, current: false, isOpen: true,
        subItems: [
          { name: '現金', href: '/payment', icon: MinusIcon, current: false },
          { name: 'クレジット', href: '/payment', icon: MinusIcon, current: false }
        ]
      },
      { name: 'メッセージ', href: '/message', icon: BellAlertIcon, current: false },
      { name: '問い合わせ', href: '/contact', icon: ChatBubbleBottomCenterTextIcon, current: false },
      { name: '設定', href: '/setting', icon: Cog6ToothIcon, current: false },
    ]
  }
};