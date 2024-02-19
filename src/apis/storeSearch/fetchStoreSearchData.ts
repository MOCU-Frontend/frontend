import instance from '../instance';
import { storeSearchResponse } from '../../store/Type/StoreSearch/storeSearch';

export const fetchStoreSearchData = async (
  userId: number,
  latitude: number,
  longitude: number
) => {
  const response = await instance.get<storeSearchResponse>(
    // 더미 데이터
    // '/data/storeSearch/storeSearchData-exist.json'

    // 실제 데이터
    `/store/store-search/userId=${userId}?latitude=${latitude}&longitude=${longitude}`
  );
  console.log(response);
  return response.data;
};
