/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ArticlesPage from './ArticlesPage';

const meta: Meta<typeof ArticlesPage> = {
  title: '@/pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {},
  decorators: [StoreDecorator({})],
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
