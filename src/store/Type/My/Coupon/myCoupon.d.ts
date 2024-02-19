export type MyCouponData = {
  mainImageUrl: string | null;
  storeName: string;
  numOfStamp: number;
  maxStamp: number;
  numOfCouponAvailable: number;
  reward: string;
  rating: number;
  distance: number;
};
export type MyCouponDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: MyCouponData[];
};
