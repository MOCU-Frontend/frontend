import { MyReviewwHistoryDataResponse } from '../../../store/Type/My/ReviewHistory/MyReviewHistory';
import instance from '../../instance';

export const fetchMyReviewHistoryData = async (
  userId: string,
  sort: string
) => {
  const response = await instance.get<MyReviewwHistoryDataResponse>(
    // 더미데이터
    '/data/my/review/history/my-review-history-data-dummy.json'
    // 실제 연결
    // `/review/${userId}/my-review?sort=${sort}`
  );
  console.log(response);
  return response.data.result;
};
