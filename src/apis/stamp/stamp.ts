import { StampResponse } from '../../store/Type/Stamp/stamp';
import instance from '../instance';

export const fetchStampData = async (userId: string) => {
  const response = await instance.get<StampResponse>(
    // 더미데이터
    // '/data/stamp/stampPageData.json'
    // 실제 연결
    `/coupon/my-coupon/${userId}`
  );
  console.log(response);
  return response.data.result;
};