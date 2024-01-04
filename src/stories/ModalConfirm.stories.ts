import type { Meta, StoryObj } from '@storybook/react';
import ModalConfirm from '../components/ModalConfirm/ModalConfirm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ModalConfirm> = {
  title: 'Example/ModalConfirm',
  component: ModalConfirm,
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

export const ExampleModalConfirm: Story = {
  args: {
    headerTitle: '스탬프적립',
    bodyText: '스탬프를 적립할까요?',
    subText: '크림베이글 건대점',
    informText: '현재 9/10',
  },
};
