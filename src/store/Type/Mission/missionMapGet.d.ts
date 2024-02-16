export type MissionMapGetResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  numOfStamp: number;
  reward: string;
  createdDate: string;
  status: string;
};
