import { OwnerStoreDataResponse } from './../../store/Type/Owner/owner.d';
import instance from '../instance';

export const fetchOwnerStoreData = async (storeId: number) => {
  const response = await instance.get<OwnerStoreDataResponse>(
    // 더미데이터
    // '/data/owner/owner-store-data-dummy.json'
    // 실제 연결
    `/owner/store-info/${storeId}`
  );
  console.log(response);
  return response.data.result;
};
