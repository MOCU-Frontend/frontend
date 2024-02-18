import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
    queryFn: () => fetchOwnerStoreData(storeId || 5),
    enabled: !!storeId,
  });
  const ownerStoreDataPatchMutation = useMutation({
    mutationFn: (newData: OwnerStorePatchRequestData) => {
      return axios.patch('/owner/store-edit', newData);
    },
    onSuccess: () => {
      console.log('ownerStoreDataPatchMutation success!');
    },
  });
  const ownerStoreDataPostMutation = useMutation({
    mutationFn: (newData: OwnerStorePostRequestData) => {
      return axios.post('/owner/store-register', newData);
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
