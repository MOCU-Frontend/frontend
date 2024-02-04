import React from 'react';
import styles from './MissionToday.module.css';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import TodayMission from '../../../components/Mission1/atoms/TodayMission';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../../styles/colors';
import { ReactComponent as ProfileImage } from '../../../assets/icon/profileGradation.svg';
import { ReactComponent as ArrowRightSmallImage } from '../../../assets/icon/arrowRightSmall.svg';
import { ReactComponent as InformationImage } from '../../../assets/icon/information.svg';
import { ReactComponent as CoupongageImage } from '../../../assets/icon/couponGage.svg';

import { MissionTitleData, MissionCntData } from '../../../store/data/mission';

const MissionToday = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor="white"
          headerTitle="미션"
          headerTitleColor="white"
          onClickBackBtn={() => navigate('/')}
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
          <button className={styles.wrapTabButtonTrue}>
            <div className={styles.tabButtonTextTrue}>오늘의 미션</div>

            <div className={styles.tabButtonLine} />
          </button>

          <button
            className={styles.wrapTabButtonFalse}
            onClick={() => navigate('/mission/map')}
          >
            <div className={styles.tabButtonTextFalse}>미션맵</div>
          </button>
        </div>

        <div className={styles.wrapContentTitle}>
          <div>오늘의 미션을 수행하여</div>
          <div>미션맵을 완성하세요!</div>
        </div>

        <div className={styles.wrapContentSubTitle}>
          <InformationImage width={14} height={14} fill={colors.grey} />
          <div className={styles.wrapContentSubTitleText}>
            오늘의 미션 중 하나를 택하여 수행할 수 있어요.
          </div>
        </div>

        <div className={styles.wrapMissionList}>
          <div className={styles.wrapCurrentState}>
            <div className={styles.currentStateText}>
              다음 스탬프 획득까지 미션 {MissionCntData[0].todayMissionCnt}개
              남았습니다.
            </div>
            <CoupongageImage width={180} height={16} />
          </div>
          <TodayMission title={MissionTitleData[0].title} />
          <TodayMission title={MissionTitleData[1].title} />
          <TodayMission title={MissionTitleData[2].title} />
          <TodayMission title={MissionTitleData[3].title} />
          <TodayMission title={MissionTitleData[4].title} />
        </div>
      </div>
    </div>
  );
};

export default MissionToday;
