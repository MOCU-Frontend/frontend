export type MissionMapResponse = {
  code: number;
  status: number;
  message: string;
  result: Result[];
  messages: string;
};

export type Result = {
  reward: string;
};
