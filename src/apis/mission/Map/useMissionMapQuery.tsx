import { useQuery } from '@tanstack/react-query';
import { fetchMissionMapGetData } from '../fetchMissionMapGetData';

export const useMissionMapQuery = (userId: string | undefined) => {
  const missionMapQuery = useQuery({
    queryKey: ['missionMapGetData'],
    queryFn: () => fetchMissionMapGetData(userId || ''),
    enabled: !!userId,
  });
  return { missionMapQuery };
};
