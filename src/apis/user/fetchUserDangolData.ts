import instance from '../instance';
import { UserDangolResponse } from '../../store/Type/User/userDangolResponse';

export const fetchUserDangolData = async (
  userId: number,
  userLatitude: number,
  userLongitude: number,
  category?: string,
  sort?: string,
  isEventTrue?: boolean,
  isCouponUsable?: boolean
) => {
  const response = await instance.get<UserDangolResponse>(
    // 더미 데이터
    // '/data/user/userDangolData.json'

    // 실제 데이터
    `/users/${userId}/my-storelist?category=${category}&sort=${sort}&isEventTrue=${isEventTrue}&isCouponUsable=${isCouponUsable}&userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=0`
  );
  console.log(response);
  return response.data;
};
