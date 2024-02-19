import { MyPageDataResponse } from '../../store/Type/My/MyPage';
import instance from '../instance';

export const fetchMyPageData = async (userId: string) => {
  const response = await instance.get<MyPageDataResponse>(
    // 더미데이터
    // '/data/my/my-page-dummy-data.json'
    // 실제 연결
    `/users/${userId}/mypage`
  );
  console.log(response);
  return response.data.result;
};
