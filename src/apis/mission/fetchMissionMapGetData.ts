import instance from '../instance';
import { MissionMapGetResponse } from '../../store/Type/Mission/missionMapGet';

// 미션 맵 페이지 조회 API
export const fetchMissionMapGetData = async (userId: string) => {
  try {
    const response = await instance.get<MissionMapGetResponse>(
      // 더미 데이터
      // '/data/mission/missionMapGetData.json'

      // 실제 연결
      `/mission/mission-map/userId=${userId}`
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
