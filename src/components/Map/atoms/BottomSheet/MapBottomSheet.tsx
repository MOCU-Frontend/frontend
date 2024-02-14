import React from 'react';
import { colors } from '../../../../styles/colors';
import BodyTitleText from '../../../Text/BodyTitleText/BodyTitleText';
import MapBodySubText from '../Text/BodySub/MapBodySubText';
import styles from './MapBottomSheet.module.css';
import MapLeftContent from '../Content/LeftContent/MapLeftContent';
import storeImg from '../../../../assets/imgs/storeExample.png';
import MapRightContent from '../Content/RightContent/MapRightContent';
import Button from '../../../Button/Button';
import TextBadgeBtn from '../../../Button/TextBadgeBtn/TextBadgeBtn';
import BottomSheetNoBackground from '../../../BottomSheet/BottomSheetNoBackground';
import { MapStoreData } from '../../../../store/Type/Map/map';

interface Props {
  onDragBottom: () => void;
  storeInform: MapStoreData;
  onClickStampBtn: () => void;
  onClickCouponBtn: () => void;
}
const MapBottomSheet: React.FC<Props> = ({
  onDragBottom,
  storeInform,
  onClickStampBtn,
  onClickCouponBtn,
}: Props) => {
  return (
    <BottomSheetNoBackground onDragBottom={onDragBottom}>
      <div className={styles.wholeWrapper}>
        <div className={styles.textSec}>
          <BodyTitleText text={storeInform.storeName} color={colors.navy} />
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
          {storeInform.numOfCouponAvailable === 0 ? (
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
              badgeText={`${storeInform.numOfCouponAvailable}`}
            />
          )}
        </div>
      </div>
    </BottomSheetNoBackground>
  );
};

export default MapBottomSheet;
