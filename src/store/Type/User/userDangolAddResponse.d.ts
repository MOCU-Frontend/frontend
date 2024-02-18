export type UserDangolAddResponse = {
  code: number;
  status: number;
  message: string;
  result: Result;
  messages: string;
};

export type Result = {
  regularId: number;
  missionComplete: boolean;
};
