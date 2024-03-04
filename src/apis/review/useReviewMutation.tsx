import { useMutation } from '@tanstack/react-query';
import {
  ReviewPostRequestData,
  ReviewPostResponse,
} from '../../store/Type/Review/review';
import instance from '../instance';

export const useReviewMutation = () => {
  const reviewPostMutation = useMutation({
    mutationFn: (newData: ReviewPostRequestData) => {
      return instance.post('/review', newData);
    },
    onSuccess: (res) => {
      const data: ReviewPostResponse = res.data;
      console.log(data);
    },
  });
  return { reviewPostMutation };
};
