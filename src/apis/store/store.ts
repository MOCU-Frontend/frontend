import instance from '../instance';
import { StoreDetailResponse } from '../../store/Type/StoreDetail/storeDetail';

export const fetchStoreDetailData = async (
  storeId: number,
  userId: string,
  rateSort: boolean,
  timeSort: boolean,
  page: number
) => {
  const response = await instance.get<StoreDetailResponse>(
    // 더미 데이터
    // 'data/storeDetail/store-detail-dummy-data.json'
    //원래
    `/store/detail?storeId=${storeId}&userId=${userId}&rateSort=${rateSort}&timeSort=${timeSort}&page=${page}`
  );
  console.log(response);
  return response.data.result;
};
