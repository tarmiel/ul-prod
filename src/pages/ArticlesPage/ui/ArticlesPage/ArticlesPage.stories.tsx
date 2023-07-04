/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Orange: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.ORANGE)],
};
