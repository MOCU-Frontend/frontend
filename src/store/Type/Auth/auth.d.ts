export type UserTokenSaveRequestData = {
  userId: number;
  deviceId: string;
  deviceToken: string;
};
export type UserTokenSaveResponseData = {
  code: number;
  status: number;
  message: string;
  result: string;
  messages: string;
};
export type OwnerTokenSaveRequestData = {
  ownerId: number;
  deviceId: string;
  deviceToken: string;
};
export type OwnerTokenSaveResponseData = {
  code: number;
  status: number;
  message: string;
  result: string;
  messages: string;
};
