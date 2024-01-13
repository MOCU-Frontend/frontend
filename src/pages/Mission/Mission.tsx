import React, { useState } from 'react';
import styles from './Mission.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../styles/colors';
import { ReactComponent as ProfileImage } from '../../assets/icon/profile.svg';
import { ReactComponent as ArrowRightSmallImage } from '../../assets/icon/arrowRightSmall.svg';

const Mission = () => {
  const navigate = useNavigate();

  const [isTabButtonSelect, setTabButtonSelect] = useState(true);

  const handleTabClick = () => {
    setTabButtonSelect(!isTabButtonSelect);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor="white"
          headerTitle="미션"
          headerTitleColor="white"
          onClickBackBtn={() => navigate(-1)}
          backBtnbackgroundColor={colors.mapPurple}
        />
      </div>
      <div className={styles.wrapUserInformation}>
        <ProfileImage width={48} height={48} />
        <div className={styles.wrapText}>
          <div className={styles.userName}>모쿠</div>
          <button className={styles.wrapMissionNow}>
            <div className={styles.missionNowText}>미션 달성 현황</div>
            <ArrowRightSmallImage width={16} height={16} />
          </button>
        </div>
      </div>

      <div className={styles.wrapContent}>
        <div className={styles.wrapTab}>
          <button className={styles.wrapTabButton} onClick={handleTabClick}>
            <div
              className={
                isTabButtonSelect
                  ? styles.tabButtonTextTrue
                  : styles.tabButtonTextFalse
              }
            >
              오늘의 미션
            </div>
          </button>
          {isTabButtonSelect && <div className={styles.tabButtonLine} />}

          <button className={styles.wrapTabButton} onClick={handleTabClick}>
            <div
              className={
                !isTabButtonSelect
                  ? styles.tabButtonTextTrue
                  : styles.tabButtonTextFalse
              }
            >
              미션맵
            </div>
          </button>
          {!isTabButtonSelect && <div className={styles.tabButtonLine} />}
        </div>
      </div>
    </div>
  );
};

export default Mission;
