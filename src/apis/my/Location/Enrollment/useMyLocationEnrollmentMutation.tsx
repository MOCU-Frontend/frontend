import { useMutation } from '@tanstack/react-query';
import {
  AddressPostRequest,
  AddressPostResponse,
} from '../../../../store/Type/Address/address';
import instance from '../../../instance';

export const useMyLocationEnrollmentMutation = (
  userId: string | undefined,
  onSuccess: () => void
) => {
  const addressPostMutation = useMutation({
    mutationFn: (newData: AddressPostRequest) => {
      return instance.post(`/users/${userId}/address/register`, newData);
    },
    onSuccess: (res) => {
      const data: AddressPostResponse = res.data;
      console.log(data);
      onSuccess();
    },
  });
  return { addressPostMutation };
};
