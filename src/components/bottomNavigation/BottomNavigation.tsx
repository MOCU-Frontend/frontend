import React from 'react';
import styles from './BottomNavigation.module.css';
import { ReactComponent as GradationHomeImage} from '../../assets/icon/gradationHome.svg';
import { ReactComponent as CouponImage} from '../../assets/icon/coupon.svg';
import { ReactComponent as MyImage} from '../../assets/icon/my.svg';




const BottomNavigation = () => {
  return (
    <div className = {styles.container}>
      <div className = {styles.navigationBar}>
        <div className = {styles.navibar_leftright}>
          <GradationHomeImage width = "24" height = "24" />
          <div className = {styles.navibar_home_text}>홈</div>
        </div>
        <div className = {styles.navibar_button}>
          <CouponImage fill= "#FFFFFF" width= "24" height = "24"/>
          <div className = {styles.navibar_button_text}>쿠폰</div>
        </div>
        <div className = {styles.navibar_leftright}>
          <MyImage stroke="#CACACA" width= "24" height = "24" />
          <div className = {styles.navibar_my_text}>마이</div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigation;