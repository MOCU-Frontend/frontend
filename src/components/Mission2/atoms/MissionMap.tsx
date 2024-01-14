import React from 'react';
import styles from './MissionMap.module.css';

import { ReactComponent as StampNowImage } from '../../../assets/icon/stampStarBadgeMode.svg';
import { ReactComponent as StampFinishedImage } from '../../../assets/icon/stampStarGradation.svg';
import { ReactComponent as EllipseHorizonImage } from '../../../assets/icon/mapEllipseHorizon.svg';
import { colors } from '../../../styles/colors';

interface Props {
  /**
   * 스탬프 개수
   */
  stampCnt: number;

  /**
   * 오늘의 미션 성공 개수
   */
  todayMissionCnt: number;
}

const MissionMap: React.FC<Props> = ({ stampCnt, todayMissionCnt }) => {
  return (
    <div className={styles.wrapMissionMap}>
      <div className={styles.first}>
        <StampFinishedImage />
      </div>
      <div className={styles.firstEllipse}>
        <EllipseHorizonImage />
      </div>
      <div className={styles.second}>
        <StampFinishedImage />
      </div>
      <div className={styles.third}>
        <StampFinishedImage />
      </div>
      <div className={styles.fourth}>
        <StampFinishedImage />
      </div>
      <div className={styles.fifth}>
        <StampNowImage width={80} height={80} />
      </div>
    </div>
  );
};

export default MissionMap;
