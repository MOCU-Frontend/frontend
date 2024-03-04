import { useQuery } from '@tanstack/react-query';
import { fetchMissionMapGetData } from '../fetchMissionMapGetData';
import { fetchMissionPageData } from '../fetchMissionPageData';

export const useMissionTodayQuery = (
  missionCompleted: boolean,
  userId: string | undefined
) => {
  const missionTodayQuery = useQuery({
    queryKey: ['missionData', missionCompleted],
    queryFn: () => fetchMissionPageData(userId || ''),
    enabled: !!userId,
  });
  const missionTodayMapGetQuery = useQuery({
    queryKey: ['missionMapGetData'],
    queryFn: () => fetchMissionMapGetData(userId || ''),
    enabled: !!userId,
  });
  return { missionTodayQuery, missionTodayMapGetQuery };
};
