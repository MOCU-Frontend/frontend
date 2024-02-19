export type StampResponse = {
  code: number;
  status: number;
  message: string;
  result: StampData[];
  messages: string;
};

export type StampData = {
  mainImageUrl: string | null;
  name: string;
  maxStamp: number;
  numOfStamp: number;
  reward: string;
  latitude: number;
  longitude: number;
  event: string | null;
  rating: number;
};
