import React from 'react';
import MapContentWrapper from '../../Wrapper/ContentWrapper/MapContentWrapper';
import styles from './MapRightContent.module.css';
import { ReactComponent as InformationIcon } from '../../../../../assets/icon/information.svg';
import { colors } from '../../../../../styles/colors';
import MapInformText from '../../Text/InformText/MapInformText';
import MapStatusText from '../../Text/Status/MapStatusText';
import MapGageBar from '../../GageBar/MapGageBar';
import MapNextGiftText from '../../Text/NextGift/MapNextGiftText';
type CouponStatus = {
  accumNum: number;
  wholeNum: number;
};
interface Props {
  couponStatus: CouponStatus;
  nextGift: string;
}

const MapRightContent: React.FC<Props> = ({
  couponStatus,
  nextGift,
}: Props) => {
  return (
    <MapContentWrapper>
      <div className={styles.rightContentWrapper}>
        <div className={styles.accumHeader}>
          <MapInformText text='현재 누적' />
          <button className={styles.informBtn}>
            <InformationIcon width={14} height={14} fill={colors.greyLight02} />
          </button>
        </div>
        <div className={styles.statusSec}>
          <MapStatusText
            text={`${couponStatus.accumNum}/${couponStatus.wholeNum}`}
          />
          <MapGageBar
            ratio={(couponStatus.accumNum / couponStatus.wholeNum) * 100}
          />
        </div>
        <div className={styles.nextGiftSec}>
          <MapInformText text='다음 달성 혜택' />
          <MapNextGiftText text={nextGift} />
        </div>
      </div>
    </MapContentWrapper>
  );
};

export default MapRightContent;
