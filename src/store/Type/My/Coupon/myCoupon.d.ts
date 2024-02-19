export type MyCouponData = {
  mainImageUrl: string | null;
  name: string;
  maxStamp: number;
  numOfStamp: number;
  reward: string;
  latitude: number;
  longitude: number;
  event: string | null;
};
export type MyCouponDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: MyCouponData[];
};
