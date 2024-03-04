import { useMutation } from '@tanstack/react-query';
import { ownerCouponRequestData } from '../../../store/Type/My/Coupon/couponRequest';
import { ownerStampRequestData } from '../../../store/Type/Stamp/stampRequest';
import instance from '../../instance';

export const useOwnerHomeMutation = () => {
  const ownerStampMutation = useMutation({
    mutationFn: (newData: ownerStampRequestData) => {
      return instance.patch('/stamp/owner-accept', newData);
    },
    onSuccess: () => {
      console.log('ownerStampMutation success!');
    },
  });
  const ownerCouponMutation = useMutation({
    mutationFn: (newData: ownerCouponRequestData) => {
      return instance.patch('/coupon/owner-accept', newData);
    },
    onSuccess: () => {
      console.log('ownerCouponMutation success!');
    },
  });
  return { ownerStampMutation, ownerCouponMutation };
};
