import type { Meta, StoryObj } from '@storybook/react';
import SearchBarHeader from '../components/SearchBar/SearchBarHeader/SearchBarHeader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SearchBarHeader> = {
  title: 'Example/SearchBarHeader',
  component: SearchBarHeader,
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
    onClickSearchBtn: () => {},
    onClickBackBtn: () => {},
    placeholder: '지번, 도로명, 건물명으로 검색',
  },
};
