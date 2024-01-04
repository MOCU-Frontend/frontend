// Home.tsx

import React from 'react';
import styles from './Home.module.css';
import alarmImage from '../../assets/icon/alarm.svg';
import settingImage from '../../assets/icon/setting.svg';
import profileImage from '../../assets/icon/profile.svg';
import ellipseImage from '../../assets/icon/ellipse.svg';
import { ReactComponent as MapImage } from '../../assets/icon/map.svg';

import BottomNavigation from '../../components/bottomNavigation/BottomNavigation';
import { menuData } from '../../store/data/homeData';
import MenuGridItem from '../../components/MenuGridItem/MenuGridItem'; // MenuGridItem 컴포넌트를 import합니다.
import CheckSnackBarWithBtn from '../../components/SnackBar/CheckSnackBarWithBtn/CheckSnackBarWithBtn';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.appbar_header_home}>
        <span className={styles.appbar_title}>MOCU</span>
        <img src={alarmImage} className={styles.appbar_alarm} alt='' />
        <img src={settingImage} className={styles.appbar_setting} alt='' />
      </div>

      <div className={styles.title_top_home}>
        <img src={ellipseImage} className={styles.title_top_ellipse} alt='' />
        <img src={profileImage} className={styles.title_top_profile} alt='' />

        <div className={styles.title_wrap}>
          <div>모쿠님!</div>
          <div>오늘도 만나서 반가워요</div>
        </div>
      </div>

      <div className={styles.content_home_mainmenu}>
        <div className={styles.content_map}>
          <div className={styles.menu_txt}>
            <div className={styles.menu_title}>지도</div>
            <div className={styles.menu_sub_title}>
              내 근처에 있는 맛집 찾고 혜택도 얻을 수 있다?
            </div>
          </div>
          <div className={styles.map_location}>현위치 : 성북구 정릉로 77</div>
          <MapImage fill='none' stroke='#C9CEFF' className={styles.menu_icon} />
        </div>
        <div className={styles.menu_grid_container}>
          <MenuGridItem value={menuData[0]} />
          <MenuGridItem value={menuData[1]} />
          <MenuGridItem value={menuData[2]} />
          <MenuGridItem value={menuData[3]} />
        </div>

        <div className={styles.content_event}></div>
        <CheckSnackBarWithBtn
          bodyText='마이에서 단골 설정을 변경할 수 있어요.'
          btnLabel='마이에서 확인'
          onClickBtn={() => {}}
        />
        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
