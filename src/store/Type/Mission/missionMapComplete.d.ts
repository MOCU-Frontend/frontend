export type PatchResponse = {
  code: number;
  status: number;
  message: string;
  result: Reward[];
  messages: string;
};

export type Reward = {
  reward: string;
};
