import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    children: 'Text',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
  args: {
    title: 'Title',
    children: 'Text',
    theme: 'error',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    children: 'Text',
    theme: 'error',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    children: 'Text',
  },
};
