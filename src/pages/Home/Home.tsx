// Home.tsx

import React from 'react';
import styles from './Home.module.css';
import alarmImage from '../../assets/icon/alarm.svg';
import settingImage from '../../assets/icon/setting.svg';
import profileImage from '../../assets/icon/profile.svg';
import ellipseImage from '../../assets/icon/ellipse.svg';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className = {styles.appbar_header_home}>
        <span className = {styles.appbar_title}>MOCU</span>
        <img src= {alarmImage} className = {styles.appbar_alarm} alt = "" />
        <img src= {settingImage} className = {styles.appbar_setting} alt = "" />
      </div>

      <div className={styles.title_top_home}>
        <img src = {ellipseImage} className = {styles.title_top_ellipse} alt = "" />
        <img src = {profileImage} className = {styles.title_top_profile} alt = ""/>

        <div className = {styles.title_wrap}>
          <div>모쿠님!</div>
          <div>오늘도 만나서 반가워요</div>
        </div>
      </div>

      
      <div className = {styles.content_home_mainmenu}></div>
    </div>


  );
};

export default Home;

