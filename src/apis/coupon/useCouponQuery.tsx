import { useQuery } from '@tanstack/react-query';
import { UserLocation } from '../../store/data/nowUserLocation';
import { fetchMyCouponData } from '../my/coupon/myCoupon';

export const useCouponQuery = (
  userId: string | undefined,
  nowUserLocation: UserLocation | undefined
) => {
  const couponDataQuery = useQuery({
    queryKey: [
      'MyCoupon',
      userId || '',
      nowUserLocation?.latitude || 0,
      nowUserLocation?.longitude || 0,
    ],
    queryFn: () =>
      fetchMyCouponData(
        userId || '',
        nowUserLocation?.latitude || 0,
        nowUserLocation?.longitude || 0
      ),
    enabled: !!userId && !!nowUserLocation,
  });
  return { couponDataQuery };
};
