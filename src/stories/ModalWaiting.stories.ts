import type { Meta, StoryObj } from '@storybook/react';
import ModalWaiting from '../components/Modal/ModalWaiting/ModalWaiting';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ModalWaiting> = {
  title: 'Example/ModalWaiting',
  component: ModalWaiting,
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
    bodyText: '스탬프 적립 대기 중',
    bodySubText: '가게에서 요청을 확인하고 있어요.',
    subText: '크림베이글 건대점',
    informText: '적립 10/10 예정',
  },
};
