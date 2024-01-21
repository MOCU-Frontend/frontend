import React, { useState } from 'react';
import styles from './Mission2.module.css';
import HeaderBackBtn from '../../components/HeaderBackBtn/HeaderBackBtn';
import MissionMap from '../../components/Mission2/atoms/MissionMap';
import { ReactComponent as InformationImage } from '../../assets/icon/information.svg';
import { ReactComponent as HourglassImage } from '../../assets/icon/hourGlassSmall.svg';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../styles/colors';

const Mission2 = () => {
  const navigate = useNavigate();
  const stampCnt = 1;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor='white'
          headerTitle='미션'
          headerTitleColor='white'
          onClickBackBtn={() => navigate('/home')}
        />
      </div>

      <div className={styles.wrapContent}>
        <div className={styles.wrapTab}>
          <button
            className={styles.wrapTabButtonFalse}
            onClick={() => navigate('/mission/1')}
          >
            <div className={styles.tabButtonTextFalse}>오늘의 미션</div>
          </button>
          <button className={styles.wrapTabButtonTrue}>
            <div className={styles.tabButtonTextTrue}>미션맵</div>
            <div className={styles.tabButtonLine} />
          </button>
        </div>

        <div className={styles.wrapContentTitle}>
          <div>미션맵 완성까지</div>
          <div>스탬프 {stampCnt}개가 남았어요!</div>
        </div>

        <div className={styles.wrapContentSubTitle}>
          <InformationImage width={14} height={14} fill={colors.grey} />
          <div className={styles.wrapContentSubTitleText}>
            오늘의 미션 5개를 수행하면 스탬프 1개가 채워져요.
          </div>
        </div>

        <div className={styles.wrapMissionMap}>
          <div className={styles.wrapLeftTime}>
            <HourglassImage width={24} height={24} fill={colors.greyDark00} />
            <div className={styles.leftTimeText}>12일 3시간 후 종료</div>
          </div>
          <MissionMap stampCnt={stampCnt} todayMissionCnt={1} />
        </div>
      </div>
    </div>
  );
};

export default Mission2;
