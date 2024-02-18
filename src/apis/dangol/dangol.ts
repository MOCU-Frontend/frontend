import { DangolDataResponse } from '../../store/Type/Dangol/Dangol';
import instance from '../instance';

export const fetchDangolData = async (
  userId: number,
  sort: string,
  category: string,
  isEventTrue: boolean,
  isCouponUsable: boolean,
  userLatitude: number,
  userLongitude: number,
  page: number
) => {
  const response = await instance.get<DangolDataResponse>(
    // 더미데이터
    '/data/dangol/dangol-dummy-data.json'
    // 실제 연결
    //`http://localhost:9000/users/2/my-storelist?category=식당&sort=
    //최신순&isEventTrue=false&isCouponUsable=false&userLatitude=37.53939427920637
    //&userLongitude=127.07278389250759&page=0`
  );
  console.log(response);
  return response.data.result;
};
