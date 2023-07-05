import type { Meta, StoryObj } from '@storybook/react';
import CommentList from './CommentList';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CommentList> = {
  title: 'entities/CommentList',
  component: CommentList,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
