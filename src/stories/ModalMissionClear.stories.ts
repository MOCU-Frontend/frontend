import type { Meta, StoryObj } from '@storybook/react';
import ModalMissionClear from '../components/Modal/ModalMissionClear/ModalMissionClear';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ModalMissionClear> = {
  title: 'Example/ModalMissionClear',
  component: ModalMissionClear,
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
    bodyText: '오늘의 미션 수행 완료!',
    subText: '“이벤트 중인 가게 정보 확인하기”',
  },
};
