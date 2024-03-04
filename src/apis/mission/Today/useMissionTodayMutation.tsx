import { useMutation } from '@tanstack/react-query';
import { missionBtnResponse } from '../../../store/Type/Mission/missionBtnResponse';
import instance from '../../instance';

export const useMissionTodayMutation = (
  onSuccess: (data: missionBtnResponse) => void
) => {
  const missionBtnMutation = useMutation({
    mutationFn: (newData: { todayMissionId: number; userId: string }) => {
      return instance.patch('/mission/today-mission/done', newData);
    },
    onSuccess: (res) => {
      const data: missionBtnResponse = res.data;
      console.log(data);
      onSuccess(data);
    },
  });
  return { missionBtnMutation };
};
