export type AddressGetData = {
  addressId: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
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
  latitude: number;
  longitude: number;
};

export type AddressPatchRequest = {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
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
