import React from 'react';
import styles from './HomeBottomNavigation.module.css';
import { ReactComponent as GradationHomeImage } from '../../../../assets/icon/gradationHome.svg';
import { ReactComponent as CouponImage } from '../../../../assets/icon/coupon.svg';
import { ReactComponent as MyImage } from '../../../../assets/icon/my.svg';
import { colors } from '../../../../styles/colors';
import HomeBottomNavigationText from '../Text/BottomNavigation/HomeBottomNavigationText';

const HomeBottomNavigation = () => {
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.btnSec}>
        <div className={styles.normalBtn}>
          <GradationHomeImage width='24' height='24' />
          <HomeBottomNavigationText text='홈' color={colors.mainPurple} />
        </div>
        <div className={styles.circleBtn}>
          <CouponImage fill={colors.white} width='24' height='24' />
          <HomeBottomNavigationText text='쿠폰' color={colors.white} />
        </div>
        <div className={styles.normalBtn}>
          <MyImage stroke={colors.greyLight02} width='24' height='24' />
          <HomeBottomNavigationText text='마이' color={colors.greyLight02} />
        </div>
      </div>
    </div>
  );
};

export default HomeBottomNavigation;
