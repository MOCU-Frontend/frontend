export type StoreSearchResultResponse = {
  code: number;
  status: number;
  message: string;
  result: StoreSearchResultData[];
  messages: string;
};

export type StoreSearchResultData = {
  storeImages: string[];
  category: string;
  storeName: string;
  numOfStamp: number;
  numOfCouponAvailable: number;
  maxStamp: number;
  reward: string;
  rating: number;
  reviews: Review[];
};

type Review = {
  name: string;
  userImage: null | string;
  rate: number;
  content: string;
  modifiedDate: null | string;
};
