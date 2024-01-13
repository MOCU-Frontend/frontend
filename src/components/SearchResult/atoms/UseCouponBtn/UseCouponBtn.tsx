import React from 'react';
import styles from './UseCouponBtn.module.css';
import { ReactComponent as CouponImage } from '../../../../assets/icon/coupon.svg';
import { colors } from '../../../../styles/colors';
interface Props {
  onClick: () => void;
}
const UseCouponBtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button className={styles.wrapButton} onClick={onClick}>
      <CouponImage width={16} height={16} fill={colors.white} />
      <div className={styles.buttonText}>사용</div>
    </button>
  );
};

export default UseCouponBtn;
