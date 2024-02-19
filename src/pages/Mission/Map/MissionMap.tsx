import React, { useEffect, useState } from 'react';
import styles from './MissionMap.module.css';
import HeaderBackBtn from '../../../components/HeaderBackBtn/HeaderBackBtn';
import MissionMapContent from '../../../components/Mission2/atoms/MissionMapContent';
import { ReactComponent as InformationImage } from '../../../assets/icon/information.svg';
import { ReactComponent as HourglassImage } from '../../../assets/icon/hourGlassSmall.svg';

import { useNavigate } from 'react-router-dom';
import { colors } from '../../../styles/colors';

import instance from '../../../apis/instance';
import { useMutation, useQuery } from '@tanstack/react-query';

import { fetchMissionMapGetData } from './../../../apis/mission/fetchMissionMapGetData';
import { fetchMissionMapCompleteData } from './../../../apis/mission/fetchMissionMapCompleteData';
import axios from 'axios';
import { MissionMapCompleteResponse } from '../../../store/Type/Mission/missionMapCompleteResponse';

import ModalMissionClear from '../../../components/Modal/ModalMissionClear/ModalMissionClear';
import useStore from '../../../store/useStore';

const MissionMap = () => {
  const navigate = useNavigate();

  const userId = useStore((state) => state.userId);
  // fetchMissionMapGetData
  const {
    data: MissionMapGetData,
    isLoading: isMissionMapGetDataLoading,
    isError: isMissionMapGetDataError,
  } = useQuery({
    queryKey: ['missionMapGetData'],
    queryFn: () => fetchMissionMapGetData(userId || ''),
    enabled: !!userId,
  });

  // 스탬프 개수
  const stampCnt = MissionMapGetData?.numOfStamp;
  // const stampCnt = 30;

  const [reward, setReward] = useState<string>('스타벅스 2만원권');

  const [rewardGet, setRewardGet] = useState<boolean>(false);

  const handleRewardClick = () => {
    missionMapCompleteMutation.mutate({
      // 임시 userId
      userId: 1,
    });
    setRewardGet(true);
  };

  // fetchMissionMapCompleteData
  // const missionMapComplete = useMutation(fetchMissionMapCompleteData);
  const missionMapCompleteMutation = useMutation({
    mutationFn: (newData: { userId: number }) => {
      return axios.patch('/mission/mission-map/complete', newData);
    },
    onSuccess: (res) => {
      const data: MissionMapCompleteResponse = res.data;
      setReward(res.data.result.reward);
    },
  });

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

export default MissionMap;
