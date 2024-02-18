import { OwnerCouponDataResponse } from './../../store/Type/Owner/Coupon/ownerCoupon.d';
import instance from '../instance';

export const fetchOwnerCouponData = async (ownerId: number, sort: string) => {
  const response = await instance.get<OwnerCouponDataResponse>(
    // 더미데이터
    '/data/owner/coupon/owner-coupon-data-dummy.json'
    // 실제 연결
    //`http://localhost:9000/owner/${ownerId}/stamp-of-customer?sort=${sort}`
  );
  console.log(response);
  return response.data.result;
};
