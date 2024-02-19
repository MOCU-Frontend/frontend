import React from 'react';
import UseCouponBtnInStamp from '../../../../../Stamp/atoms/StoreInfoInStamp/UseCouponBtnInStamp/UseCouponBtnInStamp';
import styles from './StoreDangolAddItem.module.css';
import { ReactComponent as StarImage } from '../../../../../../assets/icon/star.svg';
import { ReactComponent as MapImage } from '../../../../../../assets/icon/mapMarkerRegularSolid.svg';
import { colors } from '../../../../../../styles/colors';
import StoreDangolAddCheckBox from '../CheckBox/StoreDangolAddCheckBox';
interface Props {
  title: string;
  couponCount: number;
  achieve: string;
  distance: number;
  onClickStoreDetailBtn: () => void;
  onClickCheckBox: () => void;
  index: number;
  selectedStoreIndex: number;
}

const StoreDangolAddItem: React.FC<Props> = ({
  title,
  couponCount,
  achieve,
  distance,
  onClickStoreDetailBtn,
  index,
  selectedStoreIndex,
  onClickCheckBox,
}) => {
  return (
    <div className={styles.wrapStoreInfo}>
      <div className={styles.storeWrapImgStar}>
        <div className={styles.storeImage} />
        <div className={styles.storeWrapStar}>
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
          <StarImage width={10} height={10} />
        </div>
      </div>

      <div className={styles.storeWrapText}>
        <div className={styles.storeTitle} onClick={onClickStoreDetailBtn}>
          {title}
        </div>
        <div className={styles.storeWrapInfoText}>
          <div className={styles.storeWrapCouponSentence}>
            <div className={styles.storeCouponCount}>{couponCount}/10</div>
          </div>

          <div className={styles.storeAchieve}>달성 혜택: {achieve}</div>
        </div>
      </div>

      <div className={styles.rightWrapper}>
        <StoreDangolAddCheckBox
          isChecked={index === selectedStoreIndex}
          onClick={onClickCheckBox}
        />
        <div className={styles.distanceWrapper}>
          <MapImage
            width={11}
            height={14}
            stroke={colors.greyLight02}
            fill={colors.white}
          />
          <div className={styles.storeDistanceText}>
            {Math.round(distance)}m
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreDangolAddItem;
