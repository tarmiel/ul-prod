import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: '@/features/LoginForm',
  component: LoginForm,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export const LightWithError: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'error' } })],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ loginForm: { username: 'admin', password: '123' } })],
};

export const DarkWithError: Story = {
  args: {},
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: 'admin', password: '123', error: 'error' } }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({ loginForm: { username: 'admin', password: '123', isLoading: true } })],
};
