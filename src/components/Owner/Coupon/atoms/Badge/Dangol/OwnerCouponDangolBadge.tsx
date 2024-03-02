import React from 'react';
import OwnerCouponDangolText from '../../Text/Dangol/OwnerCouponDangolText';
import styles from './OwnerCouponDangolBadge.module.css';

const OwnerCouponDangolBadge = () => {
  return (
    <div className={styles.wholeWrapper}>
      <OwnerCouponDangolText text='단골' />
    </div>
  );
};

export default OwnerCouponDangolBadge;
