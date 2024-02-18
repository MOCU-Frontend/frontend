import instance from '../instance';
import { StoreSearchResultResponse } from '../../store/Type/StoreSearchResult/storeSearchResult';

export const fetchStoreSearchResultData = async (
  userId: number,
  userLatitude: number,
  userLongitude: number,
  query?: string,
  sort?: string,
  savingOption?: boolean,
  notVisitedOption?: boolean,
  eventOption?: boolean,
  page?: number,
  category?: string
) => {
  const response = await instance.get<StoreSearchResultResponse>(
    // 더미 데이터
    '/data/storeSearchResult/SearchResultData-rate.json'

    // 실제 연결
    // '/store/search-result?userId=`${userId}`&query=`${searchWord}`&sort=`${sort}`&category=`${category}`&savingOption=f`${savingOption}`&notVisitiedOption=`${notVisitiedOption}`&couponImminentOption=`${couponImminentOPtion}`&eventOption=`${eventOption}`&userLatitude=`${userLatitude}`&userLongitude=`${userLongitude}`&page=0
  );
  console.log(response);
  return response.data.result;
};
