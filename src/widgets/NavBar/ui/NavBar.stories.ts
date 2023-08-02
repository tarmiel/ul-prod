import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: '@/widgets/NavBar',
  component: NavBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})],
};

export const AuthDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: {} })],
};
