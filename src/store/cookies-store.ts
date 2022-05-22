import create from 'zustand';
import { persist } from 'zustand/middleware';

type Cookies = {
  cookies: boolean;
  toggleCookies: () => void;
};

export const useCookiesPersist = create<Cookies>()(
  persist(
    (set, get) => ({
      cookies: false,
      toggleCookies: () => {
        set({ cookies: !get().cookies });
      },
    }),
    { name: `instead-cookies` },
  ),
);
