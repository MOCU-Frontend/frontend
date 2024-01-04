import type { Meta, StoryObj } from '@storybook/react';
import BubbleTooltip from '../components/BubbleTooltip/BubbleTooltip';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BubbleTooltip> = {
  title: 'Example/BubbleTooltip',
  component: BubbleTooltip,
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
    tailDirection: 'bottom',
    bodyText: '지도를 움직여 위치를 설정하세요.',
    isClickBtn: false,
  },
};
export const BubbleTooltipXBtn: Story = {
  args: {
    tailDirection: 'bottom',
    bodyText: '단골 설정이 가능한 가게가 있어요.',
    onClickXBtn: () => {},
    isClickBtn: true,
  },
};
export const BubbleTooltipBottom: Story = {
  args: {
    tailDirection: 'bottom',
    bodyText: '단골 설정이 가능한 가게가 있어요.',
    onClickXBtn: () => {},
    isClickBtn: true,
  },
};
export const BubbleTooltipLeft: Story = {
  args: {
    tailDirection: 'left',
    bodyText: '단골 설정이 가능한 가게가 있어요.',
    onClickXBtn: () => {},
    isClickBtn: true,
  },
};
export const BubbleTooltipTop: Story = {
  args: {
    tailDirection: 'top',
    bodyText: '단골 설정이 가능한 가게가 있어요.',
    onClickXBtn: () => {},
    isClickBtn: true,
  },
};
export const BubbleTooltipRight: Story = {
  args: {
    tailDirection: 'right',
    bodyText: '단골 설정이 가능한 가게가 있어요.',
    onClickXBtn: () => {},
    isClickBtn: true,
  },
};
