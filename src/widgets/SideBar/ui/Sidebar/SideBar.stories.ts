import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
