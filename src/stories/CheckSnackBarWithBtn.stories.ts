import type { Meta, StoryObj } from '@storybook/react';
import CheckSnackBarWithBtn from '../components/SnackBar/CheckSnackBarWithBtn/CheckSnackBarWithBtn';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckSnackBarWithBtn> = {
  title: 'Example/CheckSnackBarWithBtn',
  component: CheckSnackBarWithBtn,
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
    bodyText: '마이에서 단골 설정을 변경할 수 있어요.',
    btnLabel: '마이에서 확인',
    onClickBtn: () => {},
  },
};
