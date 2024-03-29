import { create } from 'zustand';
import { UserLocation } from './data/nowUserLocation';

interface State {
  example: string;
  nowAddress: Address | undefined;
  setNowAddress: (newAddress: Address) => void;
  nowUserLocation: UserLocation | undefined;
  setNowUserLocation: (newUserLocation: UserLocation) => void;
  userId: string | undefined;
  storeId: number | undefined;
  setStoreId: (newStoreId: number) => void;
  setUserId: (newUserId: string) => void;
}

type Address = {
  jibun: string;
  road: string;
  buildingName: string | undefined;
};

const useStore = create<State>((set) => ({
  example: 'example',
  nowAddress: undefined,
  setNowAddress: (newAddress) => set({ nowAddress: newAddress }),
  nowUserLocation: undefined,
  setNowUserLocation: (newUserLocation) =>
    set({ nowUserLocation: newUserLocation }),
  userId: '1',
  storeId: 1,
  setStoreId: (newStoreId) => set({ storeId: newStoreId }),
  setUserId: (newUserId) => set({ userId: newUserId }),
}));

export default useStore;
