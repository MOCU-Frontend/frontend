import instance from '../instance';
import { StoreSearchResultResponse } from '../../store/Type/StoreSearchResult/storeSearchResult';

export const fetchStoreSearchResultData = async (
  userId: string,
  userLatitude: number,
  userLongitude: number,
  query?: string,
  sort?: string,
  savingOption?: boolean,
  notVisitedOption?: boolean,
  couponImminentOption?: boolean,
  eventOption?: boolean,
  page?: number,
  category?: string
) => {
  const response = await instance.get<StoreSearchResultResponse>(
    // 더미 데이터
    '/data/storeSearchResult/storeSearchResultData-rate.json'

    // 실제 연결
    // `/store/search-result?userId=${userId}&query=${query}&sort=${sort}${
    // category !== '전체' ? '&category=' + category : ''
    // }&savingOption=${savingOption}&notVisitiedOption=${notVisitedOption}&couponImminentOption=${couponImminentOption}&eventOption=${eventOption}&userLatitude=${userLatitude}&userLongitude=${userLongitude}&page=0`
  );

  return response.data.result;
};
