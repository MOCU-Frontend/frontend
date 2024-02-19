export type OwnerCouponData = {
  userImage: string | null;
  userName: string;
  numOfStamp: number;
  maxStamp: number;
  useCount: number;
  regular: boolean;
};
export type OwnerCouponDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: OwnerCouponData[];
};
