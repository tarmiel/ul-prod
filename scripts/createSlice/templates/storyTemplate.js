module.exports = (layer, componentName) => `import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  title: '${layer}/${componentName}',
  component: ${componentName},
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

export const Normal: Story = {
  args: {},
};`;
