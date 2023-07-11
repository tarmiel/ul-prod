import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPageFilters from './ArticlesPageFilters';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'pages/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilters>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
