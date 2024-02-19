export type MyPageResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  usableCoupon: number;
  availableFavoriteCount: number;
  currentAddress: string;
  recentCouponUsage: RecentCouponUsage[];
  availableReviewCount: number;
  missionStampCount: number;
};

export type RecentCouponUsage = {
  benefit: string;
  storeName: string;
};
