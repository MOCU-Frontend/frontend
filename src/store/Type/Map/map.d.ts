export type MapStoreMarkerData = {
  storeId: number;
  latitude: number;
  longitude: number;
  category: string;
  hasEvent: boolean;
  dueDate: boolean;
};

export type MapStoreMarkerResponse = {
  code: number;
  status: number;
  message: string;
  result: MapStoreMarkerData[];
};

export type MapStoreData = {
  storeName: string;
  mainImageUrl: string;
  category: string;
  dueDate: boolean;
  rating: number;
  numOfStamp: number;
  maxStamp: number;
  numOfCouponAvailable: number;
  reward: string;
  event: string | null;
};

export type MapStoreResponse = {
  code: number;
  status: number;
  message: string;
  result: MapStoreData;
};
