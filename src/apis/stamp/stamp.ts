import { StampResponse } from '../../store/Type/Stamp/stamp';
import instance from '../instance';

export const fetchStampData = async (
  userId: string,
  category: string,
  sort: string,
  isEventTrue: boolean,
  isCouponUsable: boolean,
  isStoreRegular: boolean,
  isCouponCloseToCompletion: boolean
) => {
  const response = await instance.get<StampResponse>(
    // 더미데이터
    // '/data/stamp/stampPageData.json'
    // 실제 연결
    `/coupon/my-coupon/${userId}?${
      category !== '전체' ? 'category=' + category + '&' : ''
    }&sort=${sort}&isEventTrue=${isEventTrue}&isCouponUsable=${isCouponUsable}&isStoreRegular=${isStoreRegular}&isCouponCloseToCompletion=${isCouponCloseToCompletion}`
  );
  console.log(response);
  return response.data.result;
};
