import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPageFilters from './ArticlesPageFilters';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {},
  decorators: [StoreDecorator({})],
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
