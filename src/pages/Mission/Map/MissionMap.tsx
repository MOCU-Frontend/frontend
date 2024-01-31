import React from 'react';
import styles from './MissionMap.module.css';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import MissionMapContent from '../../../components/Mission2/atoms/MissionMapContent';
import { ReactComponent as InformationImage } from '../../../assets/icon/information.svg';
import { ReactComponent as HourglassImage } from '../../../assets/icon/hourGlassSmall.svg';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../../styles/colors';
import { MissionCntData } from '../../../store/data/mission';

const MissionMap = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor="white"
          headerTitle="미션"
          headerTitleColor="white"
          onClickBackBtn={() => navigate(-1)}
        />
      </div>

      <div className={styles.wrapContent}>
        <div className={styles.wrapTab}>
          <button
            className={styles.wrapTabButtonFalse}
            onClick={() => navigate('/mission/today')}
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
          <div>스탬프 {MissionCntData[0].stampCnt}개가 남았어요!</div>
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
          <div className={styles.wrapMapPicture}>
            <MissionMapContent
              stampCnt={MissionCntData[0].stampCnt}
              todayMissionCnt={MissionCntData[0].todayMissionCnt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionMap;
