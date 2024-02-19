import React from 'react';
import styles from './MissionMapContent.module.css';
import Button from '../../Button/Button';
import MissionMapEllipse from './MissionMapEllipse/MissionMapEllipse';
import MissionMapFirstCircle from './MissionMapFirstCircle/MissionMapFirstCircle';
import MissionMapCircle from './MissionMapCircle/MissionMapCircle';

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
import MapGageBar from '../../Map/atoms/GageBar/MapGageBar';

interface Props {
  /**
   * 스탬프 개수
   */
  stampCnt: number | undefined;

  /**
   * 보상
   */
  reward: String | undefined;

  /**
   * 보상 버튼을 눌렀을 때
   */
  handleRewardClick: () => void;

  /**
   * rewardGet
   */
  rewardGet: boolean;

  /**
   *
   */
  isClicked: string;
}

const MissionMapContent: React.FC<Props> = ({
  stampCnt,
  reward,
  handleRewardClick,
  rewardGet,
  isClicked,
}) => {
  // 만약을 대비
  if (stampCnt === undefined) {
    stampCnt = 24;
  }

  return (
    <div className={styles.wrapMissionMap}>
      <div className={styles.first}>
        <MissionMapFirstCircle
          stampCnt={stampCnt}
          standardNumber1={0}
          standardNumber2={1}
          standardNumber3={5}
          standardNumber4={6}
        />
      </div>

      <div className={styles.firstEllipse}>
        {/* stampCnt가 6 이상일 때 */}
        <MissionMapEllipse
          stampCnt={stampCnt}
          standardNumber={6}
          ellipseType={2}
        />
      </div>

      <div className={styles.second}>
        <MissionMapCircle
          stampCnt={stampCnt}
          standardNumber1={6}
          standardNumber2={10}
          standardNumber3={11}
        />
      </div>

      <div className={styles.secondEllipse}>
        {/* stampCnt가 11 이상일 때 */}
        <MissionMapEllipse
          stampCnt={stampCnt}
          standardNumber={11}
          ellipseType={3}
        />
      </div>

      <div className={styles.third}>
        <MissionMapCircle
          stampCnt={stampCnt}
          standardNumber1={11}
          standardNumber2={15}
          standardNumber3={16}
        />
      </div>

      <div className={styles.thirdEllipse}>
        {/* stampCnt가 16 이상일 때 */}
        <MissionMapEllipse
          stampCnt={stampCnt}
          standardNumber={16}
          ellipseType={2}
        />
      </div>

      <div className={styles.fourth}>
        <MissionMapCircle
          stampCnt={stampCnt}
          standardNumber1={16}
          standardNumber2={20}
          standardNumber3={21}
        />
      </div>
      <div className={styles.fourthEllipse}>
        {/* stampCnt가 21 이상일 때 */}
        <MissionMapEllipse
          stampCnt={stampCnt}
          standardNumber={21}
          ellipseType={1}
        />
      </div>
      <div className={styles.fifth}>
        <MissionMapCircle
          stampCnt={stampCnt}
          standardNumber1={21}
          standardNumber2={25}
          standardNumber3={26}
        />
      </div>

      <div className={styles.fifthEllipse}>
        {/* stampCnt가 26 이상일 때 */}
        <MissionMapEllipse
          stampCnt={stampCnt}
          standardNumber={26}
          ellipseType={2}
        />
      </div>

      {stampCnt === 30 ? (
        <div className={styles.final}>
          <StampNoStarImage />
          <div className={styles.finalReward}>
            <RewardImage
              width={26}
              height={26}
              fill={colors.white}
              stroke={colors.white}
            />
          </div>
          <div className={styles.finalButton}>
            <Button
              size="small"
              label="최종 보상 받기"
              textColor="sub-purple-light"
              borderRadius="large"
              onClick={handleRewardClick}
              disabled={isClicked === 'done'}
            />
          </div>
          <div className={styles.finalButtonText}>{reward}</div>
        </div>
      ) : (
        <div className={styles.final}>
          <MissionMapCircle
            stampCnt={stampCnt}
            standardNumber1={26}
            standardNumber2={29}
            standardNumber3={30}
          />
        </div>
      )}
    </div>
  );
};

export default MissionMapContent;
