export type storeSearchResponse = {
  code: number;
  status: number;
  message: string;
  result: storeSearchData;
};

export type storeSearchData = {
  recentSearches: { query: string }[];
  recentlyVisitedStoreInfoList: StoreInfo[];
  storeInEventInfoList: StoreEventInfo[];
  dueDateStoreInfoList: StoreInfo[];
  recommendStoreInfoList: StoreRecommendInfo[];
};

export type StoreInfo = {
  storeName: string;
  numOfStamp: number;
  numOfCouponAvailable: number;
  hasEvent: boolean;
  distance: number;
};

export type StoreEventInfo = {
  storeName: string;
  mainImageUrl: string;
};

export type StoreRecommendInfo = {
  storeName: string;
  hasEvent: boolean;
  mainImageUrl: string;
  distance: number;
};
