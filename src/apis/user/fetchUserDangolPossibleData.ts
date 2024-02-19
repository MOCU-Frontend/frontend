import instance from '../instance';
import { userDangolPossibleResponse } from '../../store/Type/User/userDangolPossible';

export const fetchUserDangolPossibleData = async (
  userId: number,
  userLatitude: number,
  userLongitude: number
) => {
  const response = await instance.get<userDangolPossibleResponse>(
    // 더미 데이터
    '/data/user/userDangolPossibleData.json'

    // 실제 데이터
    // `/users/my-storelist/add-new/userId=${userId}?userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=0`
  );
  console.log(response);
  return response.data.result;
};
