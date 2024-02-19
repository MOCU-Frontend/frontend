import instance from '../instance';
import { missionCompletePatch } from '../../store/Type/Mission/missionCompletePatch';

// '미션 완료하기' 버튼 요청 처리 API
export const fetchMissionBtnPatchData = async (
  todayMissionId: number,
  userId: number
) => {
  const response = await instance.patch<missionCompletePatch>(
    // 더미데이터
    // '/data/mission/missionCompletePatch.json'

    // 실제 연결
    '/mission/today-mission/done'
  );
  console.log(response);
  return response.data;
};
