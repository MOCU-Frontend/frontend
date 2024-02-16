export type BtnPatchResponse = {
  code: number;
  status: number;
  message: string;
  result: Result[];
  messages: string;
};

export type Result = {
  content: string;
  possibleGetReward: boolean;
};
