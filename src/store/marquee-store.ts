import create from 'zustand';

interface WarnMarquee {
  shown: boolean;
  toggleMarquee: () => void;
}

export const useWarnMarquee = create<WarnMarquee>((set) => ({
  shown: true,
  toggleMarquee: () =>
    set((state: WarnMarquee) => ({
      shown: !state.shown,
    })),
}));
