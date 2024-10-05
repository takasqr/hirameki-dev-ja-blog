// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import Menu from './Menu.vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;

const menuItems = [
  { name: 'Analytics', onClick: () => console.log('click.') },
  { name: 'Engagement', href: '#' },
  { name: 'Security', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Automations', href: '#' },
  { name: 'Reports', href: '#' },
]

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args
      }
    },
    components: { Menu, ChevronDownIcon },
    template: `
      <div class="text-center w-full">
        <Menu :items="items" menuClass="right-0" :classes="classes">
          <span>Solutions</span>
          <ChevronDownIcon class="h-5 w-5" aria-hidden="true" />
        </Menu>
      </div>`,
  }),
  args: {
    items: menuItems,
    classes: {
      title: {
        text: {
          color: 'text-onSurface dark:text-onSurface-dark'
        }
      }
    }
  }
};