import instance from '../instance';
import { MapStoreMarkerResponse } from '../../store/Type/Map/map';

// `fetchMapStoreMarkerData`는 지도에 표시될 마커 데이터를 API에서 가져오는 함수입니다.
export const fetchMapStoreMarkerData = async (
  userId: string,
  latitude: number,
  longitude: number,
  eventOption: boolean,
  dueDateOption: boolean,
  categoryOption: string,
  isVisitedOption: boolean
) => {
  const response = await instance.get<MapStoreMarkerResponse>(
    // 더미 데이터
    '/data/map/mapStoreMarkerDummyData.json'

    // 실제 연결
    // `/map/userId=${userId}?latitude=${latitude}&longitude=${longitude}&eventOption=${eventOption}&dueDateOption=${dueDateOption}&categoryOption=${categoryOption}&visitOption=${isVisitedOption}`
  );
  return response.data.result;
};

export const fetchMapCafeFilterData = async (
  lat: number,
  lng: number,
  userId: number
) => {
  const response = await instance.get<MapStoreMarkerResponse>(
    // 더미 데이터
    '/data/map/mapStoreCafeFilterData.json'

    // 실제 연결
    // 'http://localhost:9000/map/userId=1?latitude=37.5404257&longitude=127.072090&eventOption=false&dueDateOption=false&categoryOption=카페'
  );
  console.log(response);
  return response.data.result;
};

export const fetchMapEventOnData = async (
  lat: number,
  lng: number,
  userId: number
) => {
  const response = await instance.get<MapStoreMarkerResponse>(
    // 더미 데이터
    '/data/map/mapStoreEventOnData.json'

    // 실제 연결
    // 'http://localhost:9000/map/userId=1?latitude=37.5404257&longitude=127.072090&eventOption=true&dueDateOption=false&categoryOption=업종 '
  );
  console.log(response);
  return response.data.result;
};
