export type OwnerRequestData = {
  name: string;
  acceptOption: 'not-accept' | 'accept';
  modifiedDate: string;
  stampOrReward: 'stamp' | 'reward';
};
export type OwnerRequestDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: OwnerRequestData[];
};
