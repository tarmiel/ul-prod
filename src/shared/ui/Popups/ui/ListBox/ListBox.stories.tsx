import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta: Meta<typeof ListBox> = {
  title: '@/shared/ListBox',
  component: ListBox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const Normal: Story = {
  args: {
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};

export const topLeft: Story = {
  args: {
    direction: 'top left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
export const topRight: Story = {
  args: {
    direction: 'top right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
export const bottomLeft: Story = {
  args: {
    direction: 'bottom left',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
export const bottomRight: Story = {
  args: {
    direction: 'bottom right',
    value: '123',
    items: [
      { content: '1asfasfasf23', value: '123' },
      { content: '1asfasfasf21233', value: '1232' },
    ],
  },
};
