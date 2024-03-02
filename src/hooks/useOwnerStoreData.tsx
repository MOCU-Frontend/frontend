import { useMutation, useQuery } from '@tanstack/react-query';
import instance from '../apis/instance';
import { fetchOwnerStoreData } from '../apis/owner/inform';

import {
  OwnerStorePatchRequestData,
  OwnerStorePostRequestData,
} from '../store/Type/Owner/owner';

export const useOwnerStoreData = (storeId?: number) => {
  const {
    data: ownerStoreData,
    isLoading: isOwnerStoreDataLoading,
    isError: isOwnerStoreDataError,
  } = useQuery({
    queryKey: ['OwnerStore'],
    queryFn: () => fetchOwnerStoreData(storeId || 1),
    enabled: !!storeId,
  });
  const ownerStoreDataPatchMutation = useMutation({
    mutationFn: (newData: OwnerStorePatchRequestData) => {
      return instance.patch('/owner/store-edit', newData);
    },
    onSuccess: () => {
      console.log('ownerStoreDataPatchMutation success!');
    },
  });
  const ownerStoreDataPostMutation = useMutation({
    mutationFn: (newData: OwnerStorePostRequestData) => {
      return instance.post('/owner/store-register', newData);
    },
    onSuccess: () => {
      console.log('ownerStoreDataPostMutation success!');
    },
  });
  return {
    ownerStoreData,
    isOwnerStoreDataLoading,
    isOwnerStoreDataError,
    ownerStoreDataPatchMutation,
    ownerStoreDataPostMutation,
  };
};
