import { create } from 'zustand';
import { UserLocation, userLocationArr } from './data/nowUserLocation';

interface State {
  example: string;
  nowAddress: Address | undefined;
  setNowAddress: (newAddress: Address) => void;
  nowUserLocation: UserLocation;
  setNowUserLocation: (newUserLocation: UserLocation) => void;
  userId: string | undefined;
}

type Address = {
  jibun: string;
  road: string;
  buildingName: string | undefined;
};

const nowUserLocation = userLocationArr.find((x) => x.isChecked);
if (!nowUserLocation) throw new Error('no nowUserLocation data');

const useStore = create<State>((set) => ({
  example: 'example',
  nowAddress: undefined,
  setNowAddress: (newAddress) => set({ nowAddress: newAddress }),
  nowUserLocation,
  setNowUserLocation: (newUserLocation) =>
    set({ nowUserLocation: newUserLocation }),
  userId: undefined,
}));

export default useStore;
