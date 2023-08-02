import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';

const meta: Meta<typeof Flex> = {
  title: '@/shared/Stack/Flex',
  component: Flex,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
