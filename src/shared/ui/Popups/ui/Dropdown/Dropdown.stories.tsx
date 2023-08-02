import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: '@/shared/Dropdown',
  component: Dropdown,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Normal: Story = {
  args: {
    trigger: <Button theme={'outline'}>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};
