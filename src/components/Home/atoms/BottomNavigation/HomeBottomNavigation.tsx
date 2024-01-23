import React from 'react';
import styles from './HomeBottomNavigation.module.css';
import { ReactComponent as GradationHomeIcon } from '../../../../assets/icon/gradationHome.svg';
import { ReactComponent as HomeIcon } from '../../../../assets/icon/home.svg';
import { ReactComponent as CouponIcon } from '../../../../assets/icon/coupon.svg';
import { ReactComponent as MyIcon } from '../../../../assets/icon/my.svg';
import { ReactComponent as MyGradationIcon } from '../../../../assets/icon/myGradation.svg';
import { colors } from '../../../../styles/colors';
import HomeBottomNavigationText from '../Text/BottomNavigation/HomeBottomNavigationText';
import { useNavigate } from 'react-router-dom';

interface Props {
  nowPage: 'home' | 'my';
}

const HomeBottomNavigation: React.FC<Props> = ({ nowPage }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <div className={styles.btnSec}>
        <button className={styles.normalBtn} onClick={() => navigate('/')}>
          {nowPage === 'home' ? (
            <GradationHomeIcon width='24' height='24' />
          ) : (
            <HomeIcon width='24' height='24' fill={colors.greyLight02} />
          )}

          <HomeBottomNavigationText text='홈' color={colors.mainPurple} />
        </button>
        <div className={styles.circleBtn} onClick={() => navigate('/coupon')}>
          <CouponIcon fill={colors.white} width='24' height='24' />
          <HomeBottomNavigationText text='쿠폰' color={colors.white} />
        </div>
        <button className={styles.normalBtn} onClick={() => navigate('/my')}>
          {nowPage === 'my' ? (
            <MyGradationIcon width='24' height='24' />
          ) : (
            <MyIcon width='24' height='24' fill={colors.greyLight02} />
          )}
          <HomeBottomNavigationText text='마이' color={colors.greyLight02} />
        </button>
      </div>
    </div>
  );
};

export default HomeBottomNavigation;
