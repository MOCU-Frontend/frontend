export type StoreDetailResponse = {
  code: number;
  status: number;
  message: string;
  result: StoreDetailData;
  messages: string;
};

export type StoreDetailData = {
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

export type Review = {
  reviewId: number;
  name: string;
  userImage: null | string;
  rate: number;
  content: string;
  modifiedDate: string;
};
