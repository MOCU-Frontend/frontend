export type TokenLoginRequestData = {
  authorizationCode: string;
};
export type TokenLoginResponseData = {
  userId: number;
  authTokens: {
    accessToken: string;
    refreshToken: string;
    grantType: 'Bearer';
    expiresIn: number;
  };
};
export type OwnerTokenLoginResponseData = {
  userId: number;
  authTokens: {
    accessToken: string;
    refreshToken: string;
    grantType: 'Bearer';
    expiresIn: number;
  };
};
