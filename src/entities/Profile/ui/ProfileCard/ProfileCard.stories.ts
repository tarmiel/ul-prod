import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
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
