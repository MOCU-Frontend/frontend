import { useQuery } from '@tanstack/react-query';
import { fetchMyPageData } from './fetchMyPageData';

export const useMyQuery = (userId: string | undefined) => {
  const myDataQuery = useQuery({
    queryKey: ['MyPage', userId],
    queryFn: () => fetchMyPageData(userId || ''),
    enabled: !!userId,
  });
  return { myDataQuery };
};
