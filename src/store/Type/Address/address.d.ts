export type AddressGetData = {
  name: string;
  address: string;
};

export type AddressGetDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: AddressGetData[];
};

export type AddressPostRequest = {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
};

export type AddressPatchRequest = {
  name: string;
  address: string;
  latitude: string;
  longitude: string;
};

export type AddressSimplePatchRequest = {
  addressName: string;
};

export type AddressPostResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: { addressId: number };
};

export type AddressPatchResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: { userId: number };
};

export type AddressSimplePatchResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: { addressId: number; addressName: string; status: string };
};
