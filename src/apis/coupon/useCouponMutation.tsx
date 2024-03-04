import { useMutation } from '@tanstack/react-query';
import { userCouponRequestData } from '../../store/Type/My/Coupon/couponRequest';
import { userStampRequestData } from '../../store/Type/Stamp/stampRequest';
import instance from '../instance';

export const useCouponMutation = () => {
  const userStampMutation = useMutation({
    mutationFn: (newData: userStampRequestData) => {
      return instance.patch('/stamp/request', newData);
    },
    onSuccess: () => {
      console.log('userStampMutation success!');
    },
  });
  const userCouponMutation = useMutation({
    mutationFn: (newData: userCouponRequestData) => {
      return instance.patch('/coupon/request', newData);
    },
    onSuccess: () => {
      console.log('userCouponMutation success!');
    },
  });
  return { userStampMutation, userCouponMutation };
};
