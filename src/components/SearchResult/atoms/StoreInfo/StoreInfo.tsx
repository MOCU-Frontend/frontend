import React from 'react';
import styles from './StoreInfo.module.css';
import { ReactComponent as StarImage } from '../../../../assets/icon/star.svg';
import { ReactComponent as MapImage } from '../../../../assets/icon/mapMarkerRegularSolid.svg';
import { colors } from '../../../../styles/colors';
import UseCouponBtn from '../UseCouponBtn/UseCouponBtn';

interface Props {
  /**
   * 가게 이름
   */
  title: string;

  /**
   * 쿠폰 개수
   */
  couponCount: number;

  /**
   * 달성 혜택
   */

  achieve: string;

  /**
   * 거리
   */
  distance: number;
}

const StoreInfo: React.FC<Props> = ({
  title,
  couponCount,
  achieve,
  distance,
}: Props) => {
  return (
    <button className={styles.wrapStoreInfo}>
      <div className={styles.storeImage} />
      <div className={styles.storeWrapText}>
        <div className={styles.storeTitle}>{title}</div>
        <div className={styles.storeWrapInfoText}>
          <div className={styles.storeWrapCouponSentence}>
            <div className={styles.storeCouponCount}>{couponCount}/10</div>
            {couponCount === 10 && <UseCouponBtn />}
          </div>

          <div className={styles.storeAchieve}>달성 혜택: {achieve}</div>
        </div>

        <div className={styles.storeWrapStar}>
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
        </div>
      </div>

      <div className={styles.storeWrapDistance}>
        <MapImage width={17.6} height={22} fill={colors.greyDark00} />
        <div className={styles.storeDistanceText}>{distance}m</div>
      </div>
    </button>
  );
};

export default StoreInfo;
