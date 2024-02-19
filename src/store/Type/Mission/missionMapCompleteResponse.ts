export type MissionMapCompleteResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  reward: string;
  status: string;
};
