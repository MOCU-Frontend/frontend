import { create } from 'zustand';

interface State {
  example: string;
  nowAddress: Address | undefined;
  setNowAddress: (newAddress: Address) => void;
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
}));

export default useStore;
