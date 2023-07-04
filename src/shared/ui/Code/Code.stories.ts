import type { Meta, StoryObj } from '@storybook/react';
import Code from './Code';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Normal: Story = {
  args: {
    text:
      'export default {\n' +
      "    title: 'shared/Code',\n" +
      '    component: Code,\n' +
      '    argTypes: {\n' +
      "        backgroundColor: { control: 'color' },\n" +
      '    },\n' +
      '} as ComponentMeta<typeof Code>;\n' +
      '\n' +
      'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
      '\n' +
      'export const Normal = Template.bind({});',
  },
};
