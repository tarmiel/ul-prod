import type { Meta, StoryObj } from '@storybook/react';

import CommentCard from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: '@/entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Vasya',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
      },
    },
  },
};
export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: {
        id: '1',
        username: 'Vasya',
        avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
      },
    },
    isLoading: true,
  },
};
