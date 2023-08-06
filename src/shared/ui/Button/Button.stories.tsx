import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: 'large',
  },
};

export const OutlineSizeXl: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: 'xl',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: 'outline',
    size: 'xl',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: 'background',
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: 'backgroundInverted',
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'large',
  },
};

export const SquareSizeXl: Story = {
  args: {
    children: '>',
    theme: 'backgroundInverted',
    square: true,
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    children: 'disabled',
    theme: 'backgroundInverted',
    disabled: true,
  },
};
