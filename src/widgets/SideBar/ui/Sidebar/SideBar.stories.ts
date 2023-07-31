import type { Meta, StoryObj } from '@storybook/react';
import SideBar from './SideBar';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof SideBar> = {
  title: 'widgets/SideBar',
  component: SideBar,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const NoAuth: Story = {
  args: {},
  decorators: [StoreDecorator({})],
};

export const Auth: Story = {
  args: {},
  decorators: [StoreDecorator({ user: { authData: {} } })],
};
