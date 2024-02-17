import instance from '../instance';
import { MapStoreMarkerResponse } from '../../store/Type/Map/map';

// `fetchMapStoreMarkerData`는 지도에 표시될 마커 데이터를 API에서 가져오는 함수입니다.
export const fetchMapStoreMarkerData = async (
  lat: number,
  lng: number,
  userId: number
) => {
  const response = await instance.get<MapStoreMarkerResponse>(
    '/data/map/mapStoreMarkerDummyData.json'
  );
  console.log(response);
  return response.data.result;
};
