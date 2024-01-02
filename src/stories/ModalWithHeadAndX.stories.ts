import type { Meta, StoryObj } from '@storybook/react';
import ModalWithHeadAndX from '../components/ModalWithHeadAndX/ModalWithHeadAndX';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ModalWithHeadAndX> = {
  title: 'Example/ModalWithHeadAndX',
  component: ModalWithHeadAndX,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const BasicModalWithTitleAndX: Story = {
  args: {
    title: 'basic title',
  },
};
