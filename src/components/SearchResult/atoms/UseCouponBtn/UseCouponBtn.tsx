import React from 'react';
import styles from './UseCouponBtn.module.css';
import { ReactComponent as CouponImage } from '../../../../assets/icon/coupon.svg';
import { colors } from '../../../../styles/colors';

const UseCouponBtn = () => {
  return (
    <button className={styles.wrapButton}>
      <CouponImage width={16} height={16} fill={colors.white} />
      <div className={styles.buttonText}>사용</div>
    </button>
  );
};

export default UseCouponBtn;
