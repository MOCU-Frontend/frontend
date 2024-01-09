// Home.tsx

import React from 'react';
import styles from './Home.module.css';
import { ReactComponent as MapIcon } from '../../assets/icon/map.svg';
import { ReactComponent as LogoText } from '../../assets/icon/logoText.svg';
import { ReactComponent as AlarmIcon } from '../../assets/icon/alarm.svg';
import { ReactComponent as SettingIcon } from '../../assets/icon/setting.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';

import BottomNavigation from '../../components/bottomNavigation/BottomNavigation';
import { menuData } from '../../store/data/homeData';
import MenuGridItem from '../../components/MenuGridItem/MenuGridItem'; // MenuGridItem 컴포넌트를 import합니다.
import { useNavigate } from 'react-router-dom';
import { colors } from '../../styles/colors';
import HomeLocationSec from '../../components/Home/atoms/Location/HomeLocationSec';
import HomeMenuBtnTitleText from '../../components/Home/atoms/Text/MenuBtnTitle/HomeMenuBtnTitleText';
import HomeMenuBtnInformText from '../../components/Home/atoms/Text/MenuBtnInform/HomeMenuBtnInformText';
import HomeMenuBtnSubText from '../../components/Home/atoms/Text/MenuBtnSub/HomeMenuBtnSubText';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LogoText width={49} height={19} fill={colors.white} />
        <div className={styles.iconBtnsWrapper}>
          <button className={styles.iconBtn} onClick={() => {}}>
            <AlarmIcon width={24} height={24} fill={colors.white} />
          </button>
          <button className={styles.iconBtn} onClick={() => {}}>
            <SettingIcon width={24} height={24} fill={colors.white} />
          </button>
        </div>
      </header>
      <div className={styles.homeTopInformBar}>
        <ProfileIcon width={48} height={48} />
        <HomeLocationSec titleText='모쿠님의 현재위치' bodyText='학교' />
      </div>

      <div className={styles.main}>
        <button className={styles.menuMapBtn} onClick={() => navigate('/map')}>
          <div className={styles.menuMapDescriptionSec}>
            <HomeMenuBtnTitleText text='지도' />
            <HomeMenuBtnSubText text='내 근처에 있는 맛집 찾고 혜택도 얻을 수 있다?' />
          </div>
          <HomeMenuBtnInformText text='현위치 : 성북구 정릉로 77' />
          <MapIcon
            width={32}
            height={32}
            stroke={colors.subPurpleLight}
            className={styles.mapIcon}
          />
        </button>
        <div className={styles.menu_grid_container}>
          <MenuGridItem value={menuData[0]} onClick={() => {}} />
          <MenuGridItem value={menuData[1]} onClick={() => {}} />
          <MenuGridItem value={menuData[2]} onClick={() => {}} />
          <MenuGridItem value={menuData[3]} onClick={() => {}} />
        </div>

        <div className={styles.content_event}></div>

        <BottomNavigation />
      </div>
    </div>
  );
};

export default Home;
