export type UserDangolResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  availableCount: number;
  storeList: StoreList[];
};

export type StoreList = {
  mainImageUrl?: any;
  name: string;
  numOfStamp: number;
  maxStamp: number;
  reward: string;
  distance: number;
};
