import type { Meta, StoryObj } from '@storybook/react';
import TextFieldNoTopBar from '../components/TextField/TextFieldNoTopBar/TextFieldNoTopBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof TextFieldNoTopBar> = {
  title: 'Example/TextFieldNoTopBar',
  component: TextFieldNoTopBar,
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

export const Example: Story = {
  args: {
    placeholder:
      '음식의 맛, 가게 분위기, 청결 상태 등에 대한 솔직한 리뷰를 최소 20자 이상 남겨주세요!',
  },
};
