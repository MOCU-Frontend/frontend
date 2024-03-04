import { useQuery } from '@tanstack/react-query';
import { fetchLocData } from './location';

export const useMyLocationEnrollmentQuery = (locText: string) => {
  const myLocationEnrollmentLocQuery = useQuery({
    queryKey: ['LocationEnrollmentLocText', locText],
    queryFn: () => fetchLocData(locText),
    enabled: !!locText,
  });
  return { myLocationEnrollmentLocQuery };
};
