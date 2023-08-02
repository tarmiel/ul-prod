import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ArticlesPageFilters from './ArticlesPageFilters';

const meta: Meta<typeof ArticlesPageFilters> = {
  title: '@/pages/ArticlesPage/ArticlesPageFilters',
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
