export type userDangolResponse = {
  code: number;
  status: number;
  message: string;
  result: Result[];
  messages: string;
};

export type Result = {
  storeId: number;
  mainImageUrl: string;
  storeName: string;
  numOfStamp: number;
  maxStamp: number;
  reward: string;
  rating: number;
  distance: number;
};
