export type DangolData = {
  availableCount: number;
  storeList: {
    mainImageUrl: null | string;
    name: string;
    numOfStamp: number;
    maxStamp: number;
    reward: string;
    distance: number;
  }[];
};
export type DangolDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: DangolData;
};
