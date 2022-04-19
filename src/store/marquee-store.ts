import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type WarnMarquee = {
  shown: boolean;
  toggleMarquee: () => void;
};

type CookiesPersist = (
  config: StateCreator<WarnMarquee>,
  options: PersistOptions<WarnMarquee>,
) => StateCreator<WarnMarquee>;

export const useWarnMarquee = create<WarnMarquee>(
  (persist as CookiesPersist)(
    (set, get) => ({
      shown: true,
      toggleMarquee: () => {
        set({ shown: !get().shown });
      },
    }),
    {
      name: 'instead-marquee-store',
    },
  ),
);
