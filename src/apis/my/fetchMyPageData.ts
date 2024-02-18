import instance from '../instance';
import { MyPageResponse } from '../../store/Type/My/myPageResponse';

// 마이 페이지 조회 API
export const fetchMyPageData = async (userId: number) => {
  const response = await instance.get<MyPageResponse>(
    // 더미데이터
    '/data/my/myPageData.json'

    // 실제 연결
    //   `/users/${userId}/mypage`
  );
  console.log(response);
  return response.data;
};
