export type missionBtnResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

type Result = {
  content: string;
  possibleGetReward: boolean;
};
