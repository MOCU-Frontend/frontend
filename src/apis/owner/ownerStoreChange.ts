import { OwnerStoreChangeDataResponse } from './../../store/Type/Owner/owner.d';
import instance from '../instance';

export const fetchOwnerStoreChangeData = async (ownerId: string) => {
  const response = await instance.get<OwnerStoreChangeDataResponse>(
    `/owner/change-to-storeId/${ownerId}`
  );
  console.log(response);
  return response.data.result;
};
