import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
  title: '@/features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Light: Story = {
  args: {
    onSendComment: (text) => text,
  },
  decorators: [StoreDecorator({})],
};
