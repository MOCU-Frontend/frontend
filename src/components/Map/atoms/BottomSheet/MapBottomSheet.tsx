import React from 'react';
import { colors } from '../../../../styles/colors';
import BottomSheet from '../../../BottomSheet/BottomSheet';
import BodyTitleText from '../../../Text/BodyTitleText/BodyTitleText';
import MapBodySubText from '../Text/BodySub/MapBodySubText';
import styles from './MapBottomSheet.module.css';
import MapLeftContent from '../Content/LeftContent/MapLeftContent';
import storeImg from '../../../../assets/imgs/storeExample.png';
interface Props {}

const MapBottomSheet: React.FC<Props> = ({}: Props) => {
  return (
    <BottomSheet isBackgroundBlur={false}>
      <div className={styles.wholeWrapper}>
        <div className={styles.textSec}>
          <BodyTitleText text='크림베이글 건대점' color={colors.navy} />
          <MapBodySubText text='베이커리 • 쿠폰사용 임박' />
        </div>
        <div className={styles.contentsSec}>
          <MapLeftContent
            imgUrl={storeImg}
            score={5.0}
            onClickReviewBtn={() => {}}
          />
        </div>
      </div>
    </BottomSheet>
  );
};

export default MapBottomSheet;
