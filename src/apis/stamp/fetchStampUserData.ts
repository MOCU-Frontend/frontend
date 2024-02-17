import instance from '../instance';

// 스탬프 적립 요청 처리 API
export const fetchStampUserData = async (userId: number, storeId: number) => {
  const response = await instance.post(
    // 더미데이터
    '/data/stamp/stampUserPost.json',

    // 실제 연결
    // 'http://localhost:9000/stamp/request',

    // POST 요청의 body
    {
      userId: userId,
      storeId: storeId,
    }
  );
  console.log(response);
  return response.data;
};
