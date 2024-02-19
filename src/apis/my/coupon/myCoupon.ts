import { MyCouponDataResponse } from '../../../store/Type/My/Coupon/myCoupon';
import instance from '../../instance';

export const fetchMyCouponData = async (
  userId: number,
  lat: number,
  lng: number
) => {
  const response = await instance.get<MyCouponDataResponse>(
    // 더미데이터
    // '/data/my/coupon/my-coupon-dummy-data.json'
    // 실제 연결
    `/stamp/stores-around/${userId}?latitude=${lat}&longitude=${lng}`
  );
  console.log(response);
  return response.data.result;
};
