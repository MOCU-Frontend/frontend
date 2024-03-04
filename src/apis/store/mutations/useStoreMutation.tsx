import { useMutation } from '@tanstack/react-query';
import { ReviewReportRequestData } from '../../../store/Type/Review/review';
import instance from '../../instance';

export const useStoreMutation = () => {
  const reviewReportMutation = useMutation({
    mutationFn: (newData: ReviewReportRequestData) => {
      return instance.post('/review/correct-my-review', newData);
    },
    onSuccess: () => {
      console.log('신고 완료');
    },
  });
  return { reviewReportMutation };
};
