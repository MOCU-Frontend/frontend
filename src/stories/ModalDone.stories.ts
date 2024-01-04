import type { Meta, StoryObj } from '@storybook/react';
import ModalDone from '../components/Modal/ModalDone/ModalDone';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ModalDone> = {
  title: 'Example/ModalDone',
  component: ModalDone,
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
    bodyText: '스탬프 적립 완료!',
    bodySubText: '가게에서 적립 요청을 수락했습니다.',
    subText: '크림베이글 건대점',
    informText: '적립 10/10',
    leftBtnLabel: '닫기',
    rightBtnLabel: '리뷰 남기러 가기',
    onClickLeftBtn: () => {},
    onClickRightBtn: () => {},
  },
};

export const NoBtns: Story = {
  args: {
    bodyText: '쿠폰 사용 완료!',
    bodySubText: '가게에서 받을 보상을 확인해주세요.',
    subText: '크림베이글 건대점',
    informText: '아이스 아메리카노 1잔',
  },
};
