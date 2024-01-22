import React from 'react';
import styles from './UseCouponBtnInStamp.module.css';
import { ReactComponent as CouponImage } from '../../../../../assets/icon/coupon.svg';
import { colors } from '../../../../../styles/colors';
interface Props {
  onClick: () => void;
}
const UseCouponBtnInStamp: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.wrapButton} onClick={onClick}>
      <CouponImage width={16} height={16} fill={colors.white} />
      <div className={styles.buttonText}>사용</div>
    </div>
  );
};

export default UseCouponBtnInStamp;
