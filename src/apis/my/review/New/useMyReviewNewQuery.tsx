import { useQuery } from '@tanstack/react-query';
import { fetchMyReviewNewData } from '../new';

export const useMyReviewNewQuery = (userId: string | undefined) => {
  const myReviewNewQuery = useQuery({
    queryKey: ['MyReviewNew', userId || ''],
    queryFn: () => fetchMyReviewNewData(userId || ''),
    enabled: !!userId,
  });

  return { myReviewNewQuery };
};
