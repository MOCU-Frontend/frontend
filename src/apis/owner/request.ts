import { OwnerRequestDataResponse } from '../../store/Type/Owner/Request/ownerRequest';
import instance from '../instance';

export const fetchOwnerRequestData = async (
  storeId: number,
  notAcceptRequest: boolean,
  bothRequest: boolean,
  rewardRequest: boolean,
  stampRequest: boolean,
  page: number
) => {
  try {
    const response = await instance.get<OwnerRequestDataResponse>(
      // 더미데이터
      // '/data/owner/request/owner-request-data-dummy.json'

      // 실제 연결
      `/owner/store-request/${storeId}?notAcceptRequest=${notAcceptRequest}&bothRequest=${bothRequest}&rewardRequest=${rewardRequest}&stampRequest=${stampRequest}&page=${page}`
    );
    console.log(response);
    return response.data.result;
  } catch (error) {
    console.error(error);
  }
};
