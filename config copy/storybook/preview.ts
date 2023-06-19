import { Theme } from './../../src/app/providers/ThemeProvider';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from './../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { TranslationDecorator } from './../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import type { Preview } from '@storybook/react';

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
  decorators: [StyleDecorator, RouterDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator],
};

export default preview;
