import create, { StateCreator } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type Cookies = {
  cookies: boolean;
  toggleCookies: () => void;
};

type CookiesPersist = (
  config: StateCreator<Cookies>,
  options: PersistOptions<Cookies>,
) => StateCreator<Cookies>;

export const useCookiesPersist = create<Cookies>(
  (persist as CookiesPersist)(
    (set, get) => ({
      cookies: false,
      toggleCookies: () => {
        set({ cookies: !get().cookies });
      },
    }),
    { name: 'instead-cookies-store' },
  ),
);
