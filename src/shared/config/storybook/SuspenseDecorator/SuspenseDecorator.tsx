import { Decorator, Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator: Decorator = (Story) => (
  <Suspense>
    <Story />
  </Suspense>
);
