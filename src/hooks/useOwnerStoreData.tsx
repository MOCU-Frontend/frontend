import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { OwnerStoreDataResponse } from '../store/Type/Owner/owner';

export const useOwnerStoreData = (storeId: number) => {
  const fetchOwnerStoreData = async (storeId: number) => {
    try {
      const response = await axios.get(
        'http://localhost:3000/data/owner/owner-store-data-dummy.json'
      );
      const data: OwnerStoreDataResponse = response.data;
      return data.result;
    } catch (error) {
      throw new Error('OwnerStore data error');
    }
  };
  const {
    data: ownerStoreData,
    isLoading: isOwnerStoreDataLoading,
    isError: isOwnerStoreDataError,
  } = useQuery({
    queryKey: ['OwnerStore'],
    queryFn: () => fetchOwnerStoreData(storeId),
  });
  return { ownerStoreData, isOwnerStoreDataLoading, isOwnerStoreDataError };
};
