import React from 'react';
import HomeHeader from '../../components/Home/atoms/Header/HomeHeader';
import styles from './My.module.css';
import { ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';
import HomeLocationSec from '../../components/Home/atoms/Location/HomeLocationSec';
import MyTopSection from '../../components/My/atoms/TopSection/MyTopSection';
import HomeBottomNavigation from '../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';

interface Props {}

const My: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader onClickAlarmBtn={() => {}} onClickSettingBtn={() => {}} />
      <div className={styles.myTopInformBar}>
        <ProfileIcon width={48} height={48} />
        <MyTopSection titleText='모쿠 님의 마이페이지' subText='@298370' />
      </div>
      <main className={styles.main}></main>
      <HomeBottomNavigation />
    </div>
  );
};

export default My;
