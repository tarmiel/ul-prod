/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ArticleDetailsPage> = {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPage>;

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
