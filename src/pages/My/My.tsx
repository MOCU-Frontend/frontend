import React from 'react';
import HomeHeader from '../../components/Home/atoms/Header/HomeHeader';
import styles from './My.module.css';
import { ReactComponent as ProfileIcon } from '../../assets/icon/profile.svg';
import { ReactComponent as ProfileGradationIcon } from '../../assets/icon/profileGradationBadgeMode.svg';
import MyTopSection from '../../components/My/atoms/TopSection/MyTopSection';
import HomeBottomNavigation from '../../components/Home/atoms/BottomNavigation/HomeBottomNavigation';

interface Props {}

const My: React.FC<Props> = ({}: Props) => {
  return (
    <div className={styles.wholeWrapper}>
      <HomeHeader onClickAlarmBtn={() => {}} onClickSettingBtn={() => {}} />
      <div className={styles.myTopInformBar}>
        <button className={styles.profileBtn} onClick={() => {}}>
          <ProfileGradationIcon width={48} height={48} />
        </button>
        <MyTopSection titleText='모쿠 님의 마이페이지' subText='@298370' />
      </div>
      <main className={styles.main}></main>
      <HomeBottomNavigation />
    </div>
  );
};

export default My;
