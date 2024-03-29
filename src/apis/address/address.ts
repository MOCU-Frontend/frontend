import instance from '../instance';
import { AddressGetDataResponse } from '../../store/Type/Address/address';

// `fetchMapStoreData`는 선택된 상점의 데이터를 API에서 가져오는 함수입니다.
export const fetchAddressData = async (userId: string) => {
  const response = await instance.get<AddressGetDataResponse>(
    // 더미 데이터
    '/data/address/address-dummy-data.json'

    // 실제 연결
    // `/users/${userId}/address`
  );
  return response.data.result;
};
