import create from 'zustand';
import { persist } from 'zustand/middleware';

type WarnMarquee = {
  shown: boolean;
  toggleMarquee: () => void;
};

export const useWarnMarquee = create<WarnMarquee>()(
  persist(
    (set, get) => ({
      shown: true,
      toggleMarquee: () => {
        set({ shown: !get().shown });
      },
    }),
    { name: `instead-marquee` },
  ),
);
