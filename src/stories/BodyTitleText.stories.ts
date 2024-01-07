import type { Meta, StoryObj } from '@storybook/react';
import BodyTitleText from '../components/Text/BodyTitleText/BodyTitleText';
import { colors } from '../styles/colors';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BodyTitleText> = {
  title: 'Example/BodyTitleText',
  component: BodyTitleText,
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

export const BubbleTooltipNoXBtn: Story = {
  args: {
    text: '쿠폰을 적립, 사용할 수 있는 근처 가게를 선택해주세요.',
    color: colors.navy,
  },
};
