import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
  title: '@/entities/ProfileCard',
  component: ProfileCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar,
    },
  },
};

export const Dark: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
      avatar,
    },
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
    },
    error: 'true',
  },
};

export const WithLoading: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Ukraine,
      lastname: 'ulbi tv',
      firstname: 'asd',
      city: 'asf',
      currency: Currency.USD,
    },
    isLoading: true,
  },
};
