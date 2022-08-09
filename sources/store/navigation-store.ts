import create from 'zustand';

interface DashNav {
  shown: boolean;
  toggleNav: () => void;
}

export const useDashNav = create<DashNav>((set) => ({
  shown: false,
  toggleNav: () =>
    set((state: DashNav) => ({
      shown: !state.shown,
    })),
}));
