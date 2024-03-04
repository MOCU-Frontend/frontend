import { useMutation } from '@tanstack/react-query';
import { UserDangolAddResponse } from '../../../../store/Type/User/userDangolAddResponse';
import { userDangolDeleteResponse } from '../../../../store/Type/User/userDangolDeleteResponse';
import instance from '../../../instance';

export const useStoreDangolAddMutation = () => {
  const DangolDeleteMutation = useMutation({
    mutationFn: (newData: { userId: string; storeId: number }) => {
      return instance.patch('/users/my-storelist/add-new/delete', newData);
    },
    onSuccess: (res) => {
      const data: userDangolDeleteResponse = res.data;
      console.log(data);
    },
  });

  const DangolAddMutation = useMutation({
    mutationFn: (newData: {
      userId: string;
      storeId: number;
      request: boolean;
    }) => {
      return instance.patch('/users/regular-request', newData);
    },
    onSuccess: (res) => {
      const data: UserDangolAddResponse = res.data;
      console.log(data);
    },
  });
  return { DangolDeleteMutation, DangolAddMutation };
};
