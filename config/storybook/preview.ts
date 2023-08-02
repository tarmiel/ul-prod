import type { Preview } from '@storybook/react';

import { Theme } from './../../src/app/providers/ThemeProvider';
import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { SuspenseDecorator } from './../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT), SuspenseDecorator],
};

export default preview;
