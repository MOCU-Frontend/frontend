import instance from '../instance';
import { MissionResponse } from '../../store/Type/Mission/mission';

// 오늘의 미션 페이지 조회 API
export const fetchMissionPageData = async (userId: string) => {
  const response = await instance.get<MissionResponse>(
    // 더미데이터
    // '/data/mission/missionDummyData-01.json'

    // 실제 연결
    `/mission/today-mission/${userId}`
  );
  console.log(response);
  return response.data.result;
};
