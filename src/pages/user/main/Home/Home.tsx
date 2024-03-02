import React, { useState } from 'react';
import styles from './Home.module.css';
import { ReactComponent as MapIcon } from '../../../../assets/icon/map.svg';
import { ReactComponent as ProfileIcon } from '../../../../assets/icon/profile.svg';

import { ReactComponent as ShoppingIcon } from '../../../../assets/icon/shopping.svg';
import { ReactComponent as StampIcon } from '../../../../assets/icon/emptyStamp.svg';
import { ReactComponent as GiftIcon } from '../../../../assets/icon/present.svg';
import { ReactComponent as RocketIcon } from '../../../../assets/icon/rocket.svg';

import BottomNavigation from '../../../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';
import { useNavigate } from 'react-router-dom';
import HomeLocationSec from '../../../../components/Home/atoms/Location/HomeLocationSec';
import HomeMenuFullBtn from '../../../../components/Home/atoms/Button/MenuFullBtn/HomeMenuFullBtn';
import HomeMenuGridBtn from '../../../../components/Home/atoms/Button/MenuGridBtn/HomeMenuGridBtn';
import HomeHeader from '../../../../components/Home/atoms/Header/HomeHeader';
import { colors } from '../../../../styles/colors';
import SlideMenuAdBodyTab from '../../../../components/SlideMenu/atoms/BodyTab/Ad/SlideMenuAdBodyTab';
import HomeAdSlideStatus from '../../../../components/Home/atoms/SlideStatus/Ad/HomeAdSlideStatus';
import useStore from '../../../../store/useStore';
import { useUserLocation } from '../../../../hooks/useUserLocation';
import { useCarouselData } from '../../../../hooks/useCarouselData';
import {
  AdItemData,
  adItemDataArr,
} from '../../../../store/data/advertisement';

const Home = () => {
  useUserLocation();
  const navigate = useNavigate();

  const { carouselItemArr: adItemArr, handleCheckedDataIndex } =
    useCarouselData<AdItemData>(adItemDataArr);

  const nowUserLocation = useStore((state) => state.nowUserLocation);
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader
        onClickAlarmBtn={() => navigate('alarm')}
        onClickSettingBtn={() => navigate('setting')}
        alarmNum={0}
      />
      <div className={styles.homeTopInformBar}>
        <ProfileIcon
          width={48}
          height={48}
          color={colors.greyDark00}
          fill={colors.white}
        />
        <HomeLocationSec
          titleText='모쿠님의 현재위치'
          bodyText={nowUserLocation ? nowUserLocation.name : '위치 없음'}
          onClickLoc={() => navigate('/mylocation')}
        />
      </div>

      <main className={styles.main}>
        <section className={styles.mainContentSec}>
          <HomeMenuFullBtn
            onClick={() => navigate('/map')}
            titleText='지도'
            subText='내 근처에 있는 맛집 찾고 혜택도 얻을 수 있다?'
            informText='현위치 : 성북구 정릉로 77'
            Icon={MapIcon}
            border={2}
            borderColor={colors.subPurplelight}
          />
          <div className={styles.menu_grid_container}>
            <HomeMenuGridBtn
              titleText='가게'
              subText='당신이 찾는 혜택 맛집은?'
              Icon={ShoppingIcon}
              onClick={() => navigate('/store/search')}
            />
            <HomeMenuGridBtn
              titleText='적립'
              subText='쿠폰 적립 현황과 달성 혜택'
              Icon={StampIcon}
              onClick={() => navigate('/stamp')}
            />
            <HomeMenuGridBtn
              titleText='선물'
              subText='선물하고 싶은 사람이 있나요?'
              Icon={GiftIcon}
              onClick={() => navigate('/gift')}
            />
            <HomeMenuGridBtn
              titleText='미션'
              subText='미션 완료하고 적립금 쌓기'
              Icon={RocketIcon}
              onClick={() => navigate('/mission/today')}
            />
          </div>
        </section>
        <div className={styles.bodyTabWrapper}>
          <SlideMenuAdBodyTab
            menuItemDataArr={adItemArr}
            handleCheckedDataIndex={handleCheckedDataIndex}
          />
          <div className={styles.statusWrapper}>
            <HomeAdSlideStatus
              handleCheckedDataIndex={handleCheckedDataIndex}
              dataArr={adItemArr}
            />
          </div>
        </div>
      </main>

      <BottomNavigation nowPage='home' />
    </div>
  );
};

export { Home as Component };
