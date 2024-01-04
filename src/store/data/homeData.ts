// homeData.ts
import { ReactComponent as ShoppingImage } from '../../assets/icon/shopping.svg';
import { ReactComponent as StampImage } from '../../assets/icon/emptyStamp.svg';
import { ReactComponent as PresentImage } from '../../assets/icon/present.svg';
import { ReactComponent as RocketImage } from '../../assets/icon/rocket.svg';

export const menuData = [
  {
    Title: '가게',
    Sub: '당신이 찾는 혜택 맛집은?',
    Image: ShoppingImage,
  },
  {
    Title: '적립',
    Sub: '쿠폰 적립 현황과 달성 혜택',
    Image: StampImage,
  },
  {
    Title: '선물',
    Sub: '선물하고 싶은 사람이 있나요?',
    Image: PresentImage,
  },
  {
    Title: '미션',
    Sub: '미션 완료하고 적립금 쌓기',
    Image: RocketImage,
  },
];
