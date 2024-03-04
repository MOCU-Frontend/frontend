import { useQuery } from '@tanstack/react-query';
import { fetchOwnerStoreChangeData } from '../ownerStoreChange';

export const useOwnerHomeQuery = (ownerId: string | undefined) => {
  const ownerHomeQuery = useQuery({
    queryKey: ['OwnerStoreChangeData'],
    queryFn: () => fetchOwnerStoreChangeData(ownerId || ''),
    enabled: !!ownerId,
  });
  return { ownerHomeQuery };
};
