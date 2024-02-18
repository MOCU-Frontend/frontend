import instance from '../instance';
import { StoreDetailResponse } from '../../store/Type/StoreDetail/storeDetail';

export const fetchStoreDetailData = async (
  storeId: number,
  userId: number,
  rateSort: boolean,
  timeSort: boolean,
  page: number
) => {
  const response = await instance.get<StoreDetailResponse>(
    // 더미 데이터
    'data/storeDetail/storeDetail-sortByRate.json'
    //원래
    //`http://localhost:9000/store/detail?storeId=2&userId=1&rateSort=true&timeSort=false&page=0`
  );
  console.log(response);
  return response.data.result;
};
