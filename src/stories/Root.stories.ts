import type { Meta, StoryObj } from '@storybook/react';
import Root from '../pages/Root/Root';

const meta = {
  title: 'Example/Root',
  component: Root,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const basic: Story = {
  args: {
    text: 'sfsf',
  },
};
