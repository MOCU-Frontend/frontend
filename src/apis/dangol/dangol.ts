import { DangolDataResponse } from '../../store/Type/Dangol/Dangol';
import instance from '../instance';

export const fetchDangolData = async (
  userId: string,
  sort: string,
  category: string,
  isEventTrue: boolean,
  isCouponUsable: boolean,
  userLatitude: number,
  userLongitude: number,
  page: number
) => {
  const response = await instance.get<DangolDataResponse>(
    // 더미데이터
    // '/data/dangol/dangol-dummy-data.json'

    // 실제 연결
    `/users/${userId}/my-storelist?${
      category !== '전체' ? 'category=' + category + '&' : ''
    }sort=${sort}&isEventTrue=${isEventTrue}&isCouponUsable=${isCouponUsable}&userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=${page}`
  );
  console.log(response);
  return response.data.result;
};
