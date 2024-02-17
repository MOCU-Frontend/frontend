import instance from '../instance';
import { MapStoreResponse } from '../../store/Type/Map/map';

// `fetchMapStoreData`는 선택된 상점의 데이터를 API에서 가져오는 함수입니다.
export const fetchMapStoreData = async (userId: number, storeId: number) => {
  const response = await instance.get<MapStoreResponse>(
    // 더미 데이터
    '/data/map/mapStoreDummyData.json'

    // 실제 연결
    // '/map/userId=1?latitude=37.5404257&longitude=127.072090&eventOption=false&dueDateOption=false&categoryOption=업종 전체'
  );
  console.log(response);
  return response.data.result;
};
