export type MyPageData = {
  usableCoupon: number;
  availableFavoriteCount: number;
  currentAddress: string;
  recentCouponUsage: {
    benefit: string;
    storeName: string;
  }[];
  availableReviewCount: number;
  missionStampCount: number;
};
export type MyPageDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: MyPageData;
};
