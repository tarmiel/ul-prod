import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import EditableProfileCardHeader from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
  title: '@/features/editableProfileCard/EditableProfileCardHeader',
  component: EditableProfileCardHeader,
  argTypes: {},
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCardHeader>;

export const Normal: Story = {
  args: {},
};
