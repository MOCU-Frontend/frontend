import React from 'react';
import styles from '../MissionMapContent.module.css';

import { ReactComponent as StampNowImage } from '../../../../assets/icon/stampStarBadgeMode.svg';
import { ReactComponent as GaugeImage } from '../../../../assets/icon/couponGage.svg';
import { ReactComponent as StampNoBadgeImage } from '../../../../assets/icon/stampStarNoBadge.svg';
import { ReactComponent as StampFinishedImage } from '../../../../assets/icon/stampStarGradation.svg';
import MissionGaugeBar from '../MissionGaugeBar/MissionGaugeBar';

interface Props {
  /**
   * 스탬프 개수
   */
  stampCnt: number | undefined;

  /**
   * 기준 숫자1
   */
  standardNumber1: number | undefined;

  /**
   * 기준 숫자2
   */
  standardNumber2: number | undefined;

  /**
   * 기준 숫자3
   */
  standardNumber3: number | undefined;
}

const MissionMapCircle: React.FC<Props> = ({
  stampCnt,
  standardNumber1,
  standardNumber2,
  standardNumber3,
}) => {
  return (
    <>
      {stampCnt !== undefined &&
        standardNumber1 !== undefined &&
        standardNumber2 !== undefined &&
        standardNumber3 !== undefined && (
          <>
            {/* stampCnt가 standardNumber1 미만 일 때 */}
            {stampCnt < standardNumber1 ? (
              <StampNoBadgeImage width={80} height={80} />
            ) : stampCnt >= standardNumber1 && stampCnt <= standardNumber2 ? (
              /* stampCnt가 standardNumber1 이상 standardNumber2 이하일 때 */
              <>
                <StampNowImage width={80} height={80} />
                <div className={styles.gaugeWrapper}>
                  <div className={styles.gaugeNumber}>{stampCnt}/30</div>
                  <MissionGaugeBar ratio={(stampCnt / 30) * 100} />
                </div>
              </>
            ) : (
              /* stampCnt가 standardNumber2 이상일 때 */
              <StampFinishedImage width={80} height={80} />
            )}
          </>
        )}
    </>
  );
};

export default MissionMapCircle;
