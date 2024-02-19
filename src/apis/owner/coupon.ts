import { OwnerCouponDataResponse } from './../../store/Type/Owner/Coupon/ownerCoupon.d';
import instance from '../instance';

export const fetchOwnerCouponData = async (
  ownerId: string,
  isCustomerRegular: boolean,
  sort: '적립 많은 순' | '쿠폰 사용 많은 순' | '최근 방문 순'
) => {
  const response = await instance.get<OwnerCouponDataResponse>(
    // 더미데이터
    // '/data/owner/coupon/owner-coupon-data-dummy.json'
    // 실제 연결
    `/owner/${ownerId}/stamp-of-customer?isCustomerRegular=${isCustomerRegular}&sort=${sort}`
  );
  console.log(response);
  return response.data.result;
};
