import type { Meta, StoryObj } from '@storybook/react';
import CheckFilter from '../components/CheckFilter/CheckFilter';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckFilter> = {
  title: 'Example/CheckFilter',
  component: CheckFilter,
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

export const UnChecked: Story = {
  args: {
    size: 'small',
    label: 'CheckFilter',
    backgroundColor: 'bg-purple-light',
    textColor: 'navy',
    checkedBackgroundColor: 'main-purple',
    checkedTextColor: 'white',
    borderRadius: 'large',
    border: 1,
    borderColor: 'sub-purple-light',
    isChecked: false,
    onClick: () => {},
  },
};

export const Checked: Story = {
  args: {
    size: 'small',
    label: 'CheckFilter',
    backgroundColor: 'bg-purple-light',
    textColor: 'navy',
    checkedBackgroundColor: 'main-purple',
    checkedTextColor: 'white',
    borderRadius: 'large',
    border: 1,
    borderColor: 'sub-purple-light',
    isChecked: true,
    onClick: () => {},
  },
};
