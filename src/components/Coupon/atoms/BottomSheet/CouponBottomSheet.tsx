import React from 'react';
import { colors } from '../../../../styles/colors';
import BodyTitleText from '../../../Text/BodyTitleText/BodyTitleText';
import styles from './CouponBottomSheet.module.css';
import storeImg from '../../../../assets/imgs/storeExample.png';
import Button from '../../../Button/Button';
import TextBadgeBtn from '../../../Button/TextBadgeBtn/TextBadgeBtn';
import BottomSheet from '../../../BottomSheet/BottomSheet';
import MapBodySubText from '../../../Map/atoms/Text/BodySub/MapBodySubText';
import MapLeftContent from '../../../Map/atoms/Content/LeftContent/MapLeftContent';
import MapRightContent from '../../../Map/atoms/Content/RightContent/MapRightContent';

type StoreData = {
  title: string;
  category: string;
  loc: { lat: number; lng: number };
  couponNum: number;
  isFire: boolean;
  isChecked: boolean;
  isGift: boolean;
};
interface Props {
  onDragBottom: () => void;
  storeInform: StoreData;
  onClickStampBtn: () => void;
  onClickCouponBtn: () => void;
}
const CouponBottomSheet: React.FC<Props> = ({
  onDragBottom,
  storeInform,
  onClickStampBtn,
  onClickCouponBtn,
}: Props) => {
  return (
    <BottomSheet
      onClickNotBottomSheet={onDragBottom}
      onDragBottom={onDragBottom}
    >
      <div className={styles.wholeWrapper}>
        <div className={styles.textSec}>
          <BodyTitleText text={storeInform.title} color={colors.navy} />
          <MapBodySubText text={`${storeInform.category} • 쿠폰사용 임박`} />
        </div>
        <div className={styles.contentsSec}>
          <MapLeftContent
            imgUrl={storeImg}
            score={5.0}
            onClickReviewBtn={() => {}}
          />
          <MapRightContent
            couponStatus={{ accumNum: 6, wholeNum: 10 }}
            nextGift='아이스아메리카노 한 잔'
          />
        </div>
        <div className={styles.btnSec}>
          <Button
            label='스탬프 적립'
            backgroundColor='main-purple'
            onClick={onClickStampBtn}
          />
          {storeInform.couponNum === 0 ? (
            <Button
              label='쿠폰 사용'
              backgroundColor='main-purple'
              onClick={() => {}}
              disabled={true}
            />
          ) : (
            <TextBadgeBtn
              label='쿠폰 사용'
              backgroundColor='sub-gradation'
              onClick={onClickCouponBtn}
              badgeText={`${storeInform.couponNum}`}
            />
          )}
        </div>
      </div>
    </BottomSheet>
  );
};

export default CouponBottomSheet;
