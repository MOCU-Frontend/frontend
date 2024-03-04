import { useMutation } from '@tanstack/react-query';
import {
  AddressPatchRequest,
  AddressPatchResponse,
} from '../../../../store/Type/Address/address';
import instance from '../../../instance';

export const useMyLocationEditMutation = (
  userId: string | undefined,
  locationId: string | undefined,
  onSuccess: () => void
) => {
  const addressPatchMutation = useMutation({
    mutationFn: (newData: AddressPatchRequest) => {
      return instance.patch(
        `/users/${userId}/modify-address/${locationId}`,
        newData
      );
    },
    onSuccess: (res) => {
      const data: AddressPatchResponse = res.data;
      console.log(data);
      onSuccess();
    },
  });
  return { addressPatchMutation };
};
