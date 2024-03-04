import { useMutation } from '@tanstack/react-query';
import { MissionMapCompleteResponse } from '../../../store/Type/Mission/missionMapCompleteResponse';
import instance from '../../instance';

export const useMissionMapMutation = (onSuccess: (data: string) => void) => {
  const missionMapCompleteMutation = useMutation({
    mutationFn: (newData: { userId: string }) => {
      return instance.patch('/mission/mission-map/complete', newData);
    },
    onSuccess: (res) => {
      const data: MissionMapCompleteResponse = res.data;
      onSuccess(data.result.reward);
    },
  });
  return { missionMapCompleteMutation };
};
