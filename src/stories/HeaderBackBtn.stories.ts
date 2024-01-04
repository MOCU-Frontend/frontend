import type { Meta, StoryObj } from '@storybook/react';
import HeaderBackBtn from '../components/HeaderBackBtn/HeaderBackBtn';
import { colors } from '../styles/colors';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HeaderBackBtn> = {
  title: 'Example/HeaderBackBtn',
  component: HeaderBackBtn,
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

export const TitleHeader: Story = {
  args: {
    headerPaddingSize: 'large',
    headerTitle: 'title',
    backBtnColor: colors.greyDark01,
    backBtnSize: 24,
    headerTitleColor: colors.greyDark01,
  },
};
export const NoTitleHeader: Story = {
  args: {
    headerPaddingSize: 'large',
    backBtnColor: colors.greyDark01,
    backBtnSize: 24,
  },
};
