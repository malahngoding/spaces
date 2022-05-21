import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type WarnMarquee = {
  shown: boolean;
  toggleMarquee: () => void;
};

export const useWarnMarquee = create<WarnMarquee>()(
  persist((set, get) => ({
    shown: true,
    toggleMarquee: () => {
      set({ shown: !get().shown });
    },
  })),
);
