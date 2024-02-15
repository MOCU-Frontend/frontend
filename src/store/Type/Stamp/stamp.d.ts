export type StampResponse = {
  code: number;
  status: number;
  message: string;
  result: StampData[];
  messages: string;
};

export type StampData = {
  mainImageUrl: string;
  storeName: string;
  numOfStamp: number;
  maxStamp: number;
  numOfCouponAvailable: number;
  reward: string;
  rating: number;
  distance: number;
};
