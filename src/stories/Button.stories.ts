import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
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

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',
    backgroundColor: 'main-purple',
    textColor: 'white',
    borderRadius: 'medium',
    border: undefined,
    borderColor: undefined,
    disabled: false,
    disabledBackgroundColor: 'grey',
    disabledTextColor: 'white',
    disabledBorderColor: 'grey',
    onClick: () => {},
  },
};

export const MediumTest: Story = {
  args: {
    size: 'medium',
    label: '리뷰 남기러 가기',
    backgroundColor: 'main-purple',
    textColor: 'white',
    borderRadius: 'medium',
    border: undefined,
    borderColor: undefined,
    disabled: false,
    disabledBackgroundColor: 'grey',
    disabledTextColor: 'white',
    disabledBorderColor: 'grey',
    onClick: () => {},
  },
};

export const Full: Story = {
  args: {
    size: 'full',
    label: 'Button',
    backgroundColor: 'main-purple',
    textColor: 'white',
    borderRadius: 'medium',
    border: undefined,
    borderColor: undefined,
    disabled: false,
    disabledBackgroundColor: 'grey',
    disabledTextColor: 'white',
    disabledBorderColor: 'grey',
    onClick: () => {},
  },
};
