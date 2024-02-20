import React from 'react';
import styles from '../MissionMapContent.module.css';

import { ReactComponent as StampNowImage } from '../../../../assets/icon/stampStarBadgeMode.svg';
import { ReactComponent as StampFinishedImage } from '../../../../assets/icon/stampStarGradation.svg';
import { ReactComponent as GaugeImage } from '../../../../assets/icon/couponGage.svg';
import { ReactComponent as StampNoBadgeImage } from '../../../../assets/icon/stampStarNoBadge.svg';
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

  /**
   * 기준 숫자4
   */
  standardNumber4: number | undefined;
}

const MissionMapFirstCircle: React.FC<Props> = ({
  stampCnt,
  standardNumber1,
  standardNumber2,
  standardNumber3,
  standardNumber4,
}) => {
  return (
    <div>
      {stampCnt !== undefined &&
        standardNumber1 !== undefined &&
        standardNumber2 !== undefined &&
        standardNumber3 !== undefined &&
        standardNumber4 !== undefined && (
          <>
            {/* stampCnt가 0일때 */}
            {stampCnt === standardNumber1 && (
              <>
                <StampNoBadgeImage width={80} height={80} />
                <div className={styles.gaugeWrapper}>
                  <div className={styles.gaugeNumber}>{stampCnt}/30</div>
                  <MissionGaugeBar ratio={0} />
                </div>
              </>
            )}

            {/* stampCnt가 1 이상 5 이하일 때 */}

            {stampCnt >= standardNumber2 && stampCnt <= standardNumber3 && (
              <>
                <StampNowImage width={80} height={80} />

                <div className={styles.gaugeWrapper}>
                  <div className={styles.gaugeNumber}>{stampCnt}/30</div>
                  <MissionGaugeBar ratio={(stampCnt / 30) * 100} />
                </div>
              </>
            )}

            {/* stampCnt가 6 이상일 때 */}
            {stampCnt >= standardNumber4 && (
              <StampFinishedImage width={80} height={80} />
            )}
          </>
        )}
    </div>
  );
};

export default MissionMapFirstCircle;
