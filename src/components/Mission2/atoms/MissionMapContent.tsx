import React from 'react';
import styles from './MissionMapContent.module.css';
import Button from '../../Button/Button';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import instance from '../../../apis/instance';

import { ReactComponent as StampNowImage } from '../../../assets/icon/stampStarBadgeMode.svg';
import { ReactComponent as StampFinishedImage } from '../../../assets/icon/stampStarGradation.svg';
import { ReactComponent as StampNoStarImage } from '../../../assets/icon/stampNoStarGradation.svg';
import { ReactComponent as StampNoStarWhiteImage } from '../../../assets/icon/stampNoStarGradationWhite.svg';
import { ReactComponent as EllipseHorizonImage } from '../../../assets/icon/mapEllipseHorizon.svg';
import { ReactComponent as EllipseRightUImage } from '../../../assets/icon/mapEllipseRightU.svg';
import { ReactComponent as EllipseLeftUImage } from '../../../assets/icon/mapEllipseLeftU.svg';
import { ReactComponent as RewardImage } from '../../../assets/icon/mapReward.svg';
import { ReactComponent as StampNoBadgeImage } from '../../../assets/icon/stampStarNoBadge.svg';
import { ReactComponent as GaugeImage } from '../../../assets/icon/couponGage.svg';
import { colors } from '../../../styles/colors';

import { PatchResponse } from '../../../store/Type/Mission/missionMapComplete';

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

const MissionMapContent: React.FC<Props> = ({ stampCnt, todayMissionCnt }) => {
  const handleRewardClick = async () => {
    try {
      const response = await instance.patch<PatchResponse>(
        '/data/mission/missionMapCompleteData.json',
        {}
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
        {stampCnt > 1 ? (
          <StampFinishedImage />
        ) : (
          <>
            <StampNowImage width={80} height={80} />
            <div className={styles.gaugeWrapper}>
              <div className={styles.gaugeNumber}>{todayMissionCnt}/5</div>
              <GaugeImage width={50} height={6} />
            </div>
          </>
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
        {stampCnt > 2 ? (
          <StampFinishedImage />
        ) : stampCnt === 2 ? (
          <>
            <StampNowImage width={80} height={80} />
            <div className={styles.gaugeWrapper}>
              <div className={styles.gaugeNumber}>{todayMissionCnt}/5</div>
              <GaugeImage width={50} height={6} />
            </div>
          </>
        ) : (
          <StampNoBadgeImage width={80} height={80} />
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
        {stampCnt > 3 ? (
          <StampFinishedImage />
        ) : stampCnt === 3 ? (
          <>
            <StampNowImage width={80} height={80} />
            <div className={styles.gaugeWrapper}>
              <div className={styles.gaugeNumber}>{todayMissionCnt}/5</div>
              <GaugeImage width={50} height={6} />
            </div>
          </>
        ) : (
          <StampNoBadgeImage width={80} height={80} />
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
        {stampCnt > 4 ? (
          <StampFinishedImage />
        ) : stampCnt === 4 ? (
          <>
            <StampNowImage width={80} height={80} />
            <div className={styles.gaugeWrapper}>
              <div className={styles.gaugeNumber}>{todayMissionCnt}/5</div>
              <GaugeImage width={50} height={6} />
            </div>
          </>
        ) : (
          <StampNoBadgeImage width={80} height={80} />
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
            <div className={styles.finalButton}>
              <Button
                size="small"
                label="최종 보상 받기"
                textColor="sub-purple-light"
                borderRadius="large"
              />
            </div>
          </>
        )}
      </div>
      <div className={styles.finalButton}>
        {stampCnt === 5 ? (
          <Button
            size="small"
            label="최종 보상 받기"
            textColor="sub-purple-light"
            onClick={handleRewardClick}
          />
        ) : (
          <Button
            size="small"
            label="최종 보상 받기"
            textColor="sub-purple-light"
            disabled={true}
          />
        )}
      </div>
      <div className={styles.finalButtonText}>*스타벅스 2만원권</div>
    </div>
  );
};

export default MissionMapContent;
