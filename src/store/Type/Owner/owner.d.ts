export type OwnerStoreDataResponse = {
  code: number;
  status: number;
  message: string;
  messages: string;
  result: OwnerStoreData;
};
export type OwnerStoreData = {
  storeName: string;
  category: string;
  address: string;
  reward: string;
  maxStamp: number;
  mainImageUrl: string;
  storeImages: string[];
  menus: OwnerStoreMenuData[];
  event: string | null;
};
export type OwnerStorePostRequestData = {
  ownerId: string;
  storeName: string;
  category: string;
  latitude: number;
  longitude: number;
  address: string;
  reward: string;
  maxStamp: number;
  mainImageUrl: string;
  storeImages: string[];
  menus: OwnerStoreMenuData[];
  event: string | null;
};
export type OwnerStorePatchRequestData = {
  storeId: number;
  storeName: string;
  category: string;
  latitude: number;
  longitude: number;
  address: string;
  reward: string;
  maxStamp: number;
  mainImageUrl: string;
  storeImages: string[];
  menus: OwnerStoreMenuData[];
  event: string | null;
};
export type OwnerStoreMenuData = {
  name: string;
  price: number;
  imageUrl: string;
};
