import React, { useState } from 'react';
import styles from './MissionMap.module.css';
import HeaderBackBtn from '../../../../../components/HeaderBackBtn/HeaderBackBtn';
import MissionMapContent from '../../../../../components/Mission2/atoms/MissionMapContent';
import { ReactComponent as InformationImage } from '../../../../../assets/icon/information.svg';
import { ReactComponent as HourglassImage } from '../../../../../assets/icon/hourGlassSmall.svg';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../../../../styles/colors';
import ModalMissionClear from '../../../../../components/Modal/ModalMissionClear/ModalMissionClear';
import useStore from '../../../../../store/useStore';
import { useMissionMapQuery } from '../../../../../apis/mission/Map/useMissionMapQuery';
import { useMissionMapMutation } from '../../../../../apis/mission/Map/useMissionMapMutation';

const MissionMap = () => {
  const navigate = useNavigate();
  const userId = useStore((state) => state.userId);
  const {
    missionMapQuery: { data: MissionMapGetData },
  } = useMissionMapQuery(userId);
  const stampCnt = MissionMapGetData?.numOfStamp;
  const [reward, setReward] = useState<string>('스타벅스 2만원권');
  const [rewardGet, setRewardGet] = useState<boolean>(false);
  const [status] = useState<string | undefined>(MissionMapGetData?.status);
  const { missionMapCompleteMutation } = useMissionMapMutation((data) =>
    setReward(data)
  );
  const handleRewardClick = () => {
    missionMapCompleteMutation.mutate({
      userId: userId || '',
    });
    setRewardGet(true);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapHeader}>
        <HeaderBackBtn
          backBtnSize={24}
          backBtnColor='white'
          headerTitle='미션'
          headerTitleColor='white'
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
          <div>
            스탬프 {stampCnt !== undefined && 30 - stampCnt}개가 남았어요!
          </div>
        </div>

        <div className={styles.wrapContentSubTitle}>
          <InformationImage width={14} height={14} fill={colors.grey} />
          <div className={styles.wrapContentSubTitleText}>
            오늘의 미션 2개를 수행하면 스탬프 1개가 채워져요.
          </div>
        </div>

        <div className={styles.wrapMissionMap}>
          <div className={styles.wrapLeftTime}>
            <HourglassImage width={24} height={24} fill={colors.greyDark00} />
            <div className={styles.leftTimeText}>12일 3시간 후 종료</div>
          </div>
          <div className={styles.wrapMapPicture}>
            <MissionMapContent
              stampCnt={stampCnt}
              reward={reward}
              handleRewardClick={handleRewardClick}
              rewardGet={rewardGet}
              status={status}
            />
          </div>
        </div>
      </div>
      {rewardGet === true && (
        <ModalMissionClear
          bodyText='미션맵 최종 보상 받기 완료!'
          subText={reward}
          time={2}
          onEndTimer={() => setRewardGet(false)}
        />
      )}
    </div>
  );
};

export { MissionMap as Component };
