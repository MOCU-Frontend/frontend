import { MyReviewwNewDataResponse } from '../../../store/Type/My/ReviewNew/MyReviewNew';
import instance from '../../instance';

export const fetchMyReviewNewData = async (userId: number) => {
  const response = await instance.get<MyReviewwNewDataResponse>(
    // 더미데이터
    '/data/my/review/new/my-review-new-data-dummy.json'
    // 실제 연결
    //`http://localhost:9000/review/available-review/${userId}`
  );
  console.log(response);
  return response.data.result;
};
