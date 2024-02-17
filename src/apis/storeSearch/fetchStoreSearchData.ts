import instance from '../instance';
import { storeSearchResponse } from '../../store/Type/StoreSearch/storeSearch';

export const fetchStoreSearchData = async () => {
  const response = await instance.get<storeSearchResponse>(
    // 더미 데이터
    '/data/storeSearch/storeSearchData-exist.json'
  );
  console.log(response);
  return response.data.result;
};
