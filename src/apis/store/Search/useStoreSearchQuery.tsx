import { useQuery } from '@tanstack/react-query';
import { UserLocation } from '../../../store/data/nowUserLocation';
import { fetchStoreSearchData } from '../../storeSearch/fetchStoreSearchData';

export const useStoreSearchQuery = (
  userId: string | undefined,
  nowUserLocation: UserLocation | undefined
) => {
  const storeSearchDataQuery = useQuery({
    queryKey: [
      'storeSearchData',
      userId,
      nowUserLocation?.latitude || 153,
      nowUserLocation?.longitude || 153,
    ],
    queryFn: () =>
      fetchStoreSearchData(
        userId || '',
        nowUserLocation?.latitude || 153,
        nowUserLocation?.longitude || 153
      ),
    enabled: !!userId && !!nowUserLocation,
  });
  return { storeSearchDataQuery };
};
