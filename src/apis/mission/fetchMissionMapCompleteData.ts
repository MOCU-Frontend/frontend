import instance from '../instance';
import { MissionMapCompletePatch } from '../../store/Type/Mission/missionMapComplete';

// 미션 맵 완료 && 보상 요청 처리 api
export const fetchMissionMapCompleteData = async (userId: number) => {
  try {
    const response = await instance.patch<MissionMapCompletePatch>(
      // 더미 데이터
      // '/data/mission/missionMapCompleteData.json'

      // 실제 연결
      `/mission/mission-map/userId=${userId}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
