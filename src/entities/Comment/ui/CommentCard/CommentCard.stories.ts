import type { Meta, StoryObj } from '@storybook/react';
import CommentCard from './CommentCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof CommentCard> = {
  title: '< >/CommentCard',
  component: CommentCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};