export type MyReviewwNewData = {
  storeImageUrl: string | null;
  visitedDate: string;
  name: string;
  category: string;
  maxStamp: number;
  numOfStamp: number;
  reward: string;
};
export type MyReviewwNewDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: MyReviewwNewData[];
};
