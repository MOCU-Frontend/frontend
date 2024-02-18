export type StoreSearchResultResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  name: string;
  reward: string;
  distance: number;
  rating: number;
  maxStamp: number;
  numOfStamp: number;
};
