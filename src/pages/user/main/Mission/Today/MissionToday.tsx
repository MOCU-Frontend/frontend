import React, { useState } from 'react';
import styles from './MissionToday.module.css';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import TodayMission from '../../../../../components/Mission1/atoms/TodayMission';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../../styles/colors';
import { ReactComponent as ProfileImage } from '../../../../../assets/icon/profileGradation.svg';
import { ReactComponent as ArrowRightSmallImage } from '../../../../../assets/icon/arrowRightSmall.svg';
import { ReactComponent as InformationImage } from '../../../../../assets/icon/information.svg';
import { missionBtnResponse } from '../../../../../store/Type/Mission/missionBtnResponse';
import ModalMissionClear from '../../../../../components/Modal/ModalMissionClear/ModalMissionClear';
import MapGageBar from '../../../../../components/Map/atoms/GageBar/MapGageBar';
import useStore from '../../../../../store/useStore';
import { useMissionTodayQuery } from '../../../../../apis/mission/Today/useMissionTodayQuery';
import { useMissionTodayMutation } from '../../../../../apis/mission/Today/useMissionTodayMutation';

const MissionToday = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const [missionCompleted, setMissionCompleted] = useState<boolean>(false);

  const {
    missionTodayQuery: { data: storeMissionData },
    missionTodayMapGetQuery: { data: MissionMapGetData },
  } = useMissionTodayQuery(missionCompleted, userId);

  const [patchData, setPatchData] = useState<missionBtnResponse | undefined>();

  const { missionBtnMutation } = useMissionTodayMutation((data) =>
    setPatchData(data)
  );

  const handleCompleteMissionClick = (
    todayMissionId: number,
    userId: string
  ) => {
    if (
      patchData?.result.content !== '이미 2개의 미션 스탬프를 획득하였습니다.'
    ) {
      setMissionCompleted(true);
    }
    missionBtnMutation.mutate({
      todayMissionId: todayMissionId,
      userId,
    });
  };

  const stampCnt = MissionMapGetData?.numOfStamp;

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor='white'
          headerTitle='미션'
          headerTitleColor='white'
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
              다음 스탬프 획득까지 미션{' '}
              {stampCnt !== undefined && 5 - (stampCnt % 5)}개 남았습니다.
            </div>
            <div>
              {stampCnt !== undefined && (
                <MapGageBar ratio={(stampCnt % 5) * 20} />
              )}
            </div>
          </div>

          {Array.isArray(storeMissionData) &&
            storeMissionData.map((mission) => (
              <TodayMission
                key={mission.todayMissionId}
                content={mission.content}
                status={mission.status}
                missionCompleteClick={() =>
                  handleCompleteMissionClick(
                    mission.todayMissionId,
                    userId || ''
                  )
                }
                patchData={patchData}
              />
            ))}
        </div>
      </div>

      {missionCompleted && patchData && (
        <ModalMissionClear
          bodyText='오늘의 미션 수행 완료'
          subText={patchData.result.content}
          time={2}
          onEndTimer={() => setMissionCompleted(false)}
        />
      )}
    </div>
  );
};

export { MissionToday as Component };
