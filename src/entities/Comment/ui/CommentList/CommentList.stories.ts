import type { Meta, StoryObj } from '@storybook/react';
import CommentList from './CommentList';

const meta: Meta<typeof CommentList> = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: {
          id: '1',
          username: 'Vasya',
          avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
      },
      {
        id: '2',
        text: 'Comment 2',
        user: {
          id: '1',
          username: 'Petya',
          avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: {
          id: '1',
          username: 'Vasya',
          avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
      },
    ],
    isLoading: true,
  },
};
export const NoComments: Story = {
  args: {
    comments: [],
  },
};
