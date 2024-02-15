export type MyReviewwHistoryData = {
  storeImageUrl: string | null;
  createdDate: string;
  storeName: string;
  rate: number;
  content: string;
};
export type MyReviewwHistoryDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: MyReviewwHistoryData[];
};
