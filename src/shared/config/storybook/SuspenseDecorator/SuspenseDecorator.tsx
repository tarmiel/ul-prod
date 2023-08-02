import { Suspense } from 'react';

import { Decorator } from '@storybook/react';

export const SuspenseDecorator: Decorator = (Story) => (
  <Suspense>
    <Story />
  </Suspense>
);
