import React from 'react';
import styles from './MissionMap.module.css';

import { ReactComponent as StampNowImage } from '../../../assets/icon/stampStarBadgeMode.svg';
import { ReactComponent as StampFinishedImage } from '../../../assets/icon/stampStarGradation.svg';
import { ReactComponent as StampNoStarImage } from '../../../assets/icon/stampNoStarGradation.svg';
import { ReactComponent as StampNoStarWhiteImage } from '../../../assets/icon/stampNoStarGradationWhite.svg';
import { ReactComponent as EllipseHorizonImage } from '../../../assets/icon/mapEllipseHorizon.svg';
import { ReactComponent as EllipseRightUImage } from '../../../assets/icon/mapEllipseRightU.svg';
import { ReactComponent as EllipseLeftUImage } from '../../../assets/icon/mapEllipseLeftU.svg';
import { ReactComponent as RewardImage } from '../../../assets/icon/mapReward.svg';
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
        {stampCnt >= 1 ? (
          <EllipseHorizonImage stroke={colors.mainPurple} />
        ) : (
          <EllipseHorizonImage stroke={colors.white} />
        )}
      </div>
      <div className={styles.second}>
        {stampCnt >= 1 ? (
          <StampFinishedImage />
        ) : (
          <StampNowImage width={80} height={80} />
        )}
      </div>
      <div className={styles.secondEllipse}>
        {stampCnt >= 2 ? (
          <EllipseRightUImage stroke={colors.mainPurple} />
        ) : (
          <EllipseRightUImage stroke={colors.white} />
        )}
      </div>
      <div className={styles.third}>
        {stampCnt >= 2 ? (
          <StampFinishedImage />
        ) : (
          <StampNowImage width={80} height={80} />
        )}
      </div>
      <div className={styles.thirdEllipse}>
        {stampCnt >= 3 ? (
          <EllipseHorizonImage stroke={colors.mainPurple} />
        ) : (
          <EllipseHorizonImage stroke={colors.white} />
        )}
      </div>
      <div className={styles.fourth}>
        {stampCnt >= 3 ? (
          <StampFinishedImage />
        ) : (
          <StampNowImage width={80} height={80} />
        )}
      </div>
      <div className={styles.fourthEllipse}>
        {stampCnt >= 4 ? (
          <EllipseLeftUImage stroke={colors.mainPurple} />
        ) : (
          <EllipseLeftUImage stroke={colors.white} />
        )}
      </div>
      <div className={styles.fifth}>
        {stampCnt >= 4 ? (
          <StampFinishedImage />
        ) : (
          <StampNowImage width={80} height={80} />
        )}
      </div>
      <div className={styles.fifthEllipse}>
        {stampCnt === 5 ? (
          <EllipseHorizonImage stroke={colors.mainPurple} />
        ) : (
          <EllipseHorizonImage stroke={colors.white} />
        )}
      </div>
      <div className={styles.final}>
        {stampCnt === 5 ? (
          <>
            <StampNoStarImage />
            <div className={styles.finalReward}>
              <RewardImage
                width={26}
                height={26}
                fill={colors.white}
                stroke={colors.white}
              />
            </div>
          </>
        ) : (
          <>
            <StampNoStarWhiteImage />
            <div className={styles.finalReward}>
              <RewardImage
                width={26}
                height={26}
                fill={colors.subPurpleLight}
                stroke={colors.subPurpleLight}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MissionMap;
