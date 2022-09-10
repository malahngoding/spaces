import create from 'zustand';
import { persist } from 'zustand/middleware';

type Cookies = {
  showCookies: boolean;
  consentValue: string;
  toggleCookies: () => void;
  setConsentValue: (value: string) => void;
};

export const useCookiesPersist = create<Cookies>()(
  persist(
    (set, get) => ({
      showCookies: true,
      consentValue: `NOT_SET`,
      toggleCookies: () => {
        set({ showCookies: !get().showCookies });
      },
      setConsentValue: (value: string) => {
        set({ consentValue: value });
      },
    }),
    { name: `instead-cookies` },
  ),
);
