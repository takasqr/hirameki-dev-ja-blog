// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3';

import ArticleList from './ArticleList.vue';

const meta: Meta<typeof ArticleList> = {
  component: ArticleList,
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: any) => ({
    setup() {
      return {
        ...args,
      };
    },
    components: { ArticleList },
    template: '<ArticleList :articles="articles"></ArticleList>',
  }),
  args: {
    articles: [{
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    },
    {
      _path: "/path",
      title: "Title",
      createDate: "2020-03-16",
      description: "Description",
      cover: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      category: "work"
    }],
  },
};