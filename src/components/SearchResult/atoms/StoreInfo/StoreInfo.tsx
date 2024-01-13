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
  /**
   * 클릭시 스토어 detail 페이지로 이동하게
   */
  onClickStoreDetailBtn: () => void;
  /**
   * 쿠폰 사용 버튼 클릭시 발생하는 이벤트
   */
  onClickCouponeBtn: () => void;
}

const StoreInfo: React.FC<Props> = ({
  title,
  couponCount,
  achieve,
  distance,
  onClickStoreDetailBtn,
  onClickCouponeBtn,
}: Props) => {
  return (
    <div className={styles.wrapStoreInfo}>
      <div className={styles.storeImage} />
      <div className={styles.storeWrapText}>
        <div className={styles.storeTitle} onClick={onClickStoreDetailBtn}>
          {title}
        </div>
        <div className={styles.storeWrapInfoText}>
          <div className={styles.storeWrapCouponSentence}>
            <div className={styles.storeCouponCount}>{couponCount}/10</div>
            {couponCount === 10 && <UseCouponBtn onClick={onClickCouponeBtn} />}
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
    </div>
  );
};

export default StoreInfo;
