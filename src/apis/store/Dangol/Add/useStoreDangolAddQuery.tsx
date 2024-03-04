import { useQuery } from '@tanstack/react-query';
import { UserLocation } from '../../../../store/data/nowUserLocation';
import { fetchUserDangolPossibleData } from '../../../user/fetchUserDangolPossibleData';

export const useStoreDangolAddQuery = (
  userId: string | undefined,
  nowUserLocation: UserLocation | undefined
) => {
  const storeDangolAddDataQuery = useQuery({
    queryKey: [
      'userDangolData',
      userId || '',
      nowUserLocation?.latitude || 37.5404257,
      nowUserLocation?.longitude || 127.07209,
    ],
    queryFn: () =>
      fetchUserDangolPossibleData(
        userId || '',
        nowUserLocation?.latitude || 37.5404257,
        nowUserLocation?.longitude || 127.07209
      ),
    enabled: !!userId && !!nowUserLocation,
  });
  return { storeDangolAddDataQuery };
};
