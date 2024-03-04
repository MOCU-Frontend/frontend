import { useMutation } from '@tanstack/react-query';
import { userCouponRequestData } from '../../store/Type/My/Coupon/couponRequest';
import instance from '../instance';

export const useStampMutation = () => {
  const userCouponMutation = useMutation({
    mutationFn: (newData: userCouponRequestData) => {
      return instance.patch('/coupon/request', newData);
    },
    onSuccess: () => {
      console.log('userCouponMutation success!');
    },
  });
  return { userCouponMutation };
};
