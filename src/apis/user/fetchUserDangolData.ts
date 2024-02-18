import instance from '../instance';
import { userDangolResponse } from '../../store/Type/User/userDangol';

export const fetchUserDangolData = async (
  userId: number,
  userLatitude: number,
  userLongitude: number
) => {
  const response = await instance.get<userDangolResponse>(
    // 더미 데이터
    '/data/user/userDangolData.json'

    // 실제 데이터
    // `/users/my-storelist/add-new/userId=${userId}?userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=0`
  );
  console.log(response);
  return response.data.result;
};
