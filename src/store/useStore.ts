import { create } from 'zustand';

interface State {
  example: string;
}

const useStore = create<State>(() => ({
  example: 'example',
}));

export default useStore;
