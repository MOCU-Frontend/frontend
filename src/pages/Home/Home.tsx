import React from 'react';
import styles from './Home.module.css';
import { ReactComponent as MapIcon } from '../../assets/icon/map.svg';
import { ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';

import { ReactComponent as ShoppingIcon } from '../../assets/icon/shopping.svg';
import { ReactComponent as StampIcon } from '../../assets/icon/emptyStamp.svg';
import { ReactComponent as PresentIcon } from '../../assets/icon/present.svg';
import { ReactComponent as RocketIcon } from '../../assets/icon/rocket.svg';

import BottomNavigation from '../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';
import { useNavigate } from 'react-router-dom';
import HomeLocationSec from '../../components/Home/atoms/Location/HomeLocationSec';
import HomeMenuFullBtn from '../../components/Home/atoms/Button/MenuFullBtn/HomeMenuFullBtn';
import HomeMenuGridBtn from '../../components/Home/atoms/Button/MenuGridBtn/HomeMenuGridBtn';
import HomeHeader from '../../components/Home/atoms/Header/HomeHeader';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader onClickAlarmBtn={() => {}} onClickSettingBtn={() => {}} />
      <div className={styles.homeTopInformBar}>
        <ProfileIcon width={48} height={48} />
        <HomeLocationSec titleText='모쿠님의 현재위치' bodyText='학교' />
      </div>

      <main className={styles.main}>
        <HomeMenuFullBtn
          onClick={() => navigate('/map')}
          titleText='지도'
          subText='내 근처에 있는 맛집 찾고 혜택도 얻을 수 있다?'
          informText='현위치 : 성북구 정릉로 77'
          Icon={MapIcon}
        />
        <div className={styles.menu_grid_container}>
          <HomeMenuGridBtn
            titleText='가게'
            subText='당신이 찾는 혜택 맛집은?'
            Icon={ShoppingIcon}
            onClick={() => {}}
          />
          <HomeMenuGridBtn
            titleText='적립'
            subText='쿠폰 적립 현황과 달성 혜택'
            Icon={StampIcon}
            onClick={() => {}}
          />
          <HomeMenuGridBtn
            titleText='선물'
            subText='선물하고 싶은 사람이 있나요?'
            Icon={PresentIcon}
            onClick={() => {}}
          />
          <HomeMenuGridBtn
            titleText='미션'
            subText='미션 완료하고 적립금 쌓기'
            Icon={RocketIcon}
            onClick={() => {}}
          />
        </div>

        <div className={styles.eventBox}></div>
      </main>
      <BottomNavigation nowPage='home' />
    </div>
  );
};

export default Home;
