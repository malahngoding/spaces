import create from 'zustand';
import { persist } from 'zustand/middleware';

type CookiesState = {
  showCookiesModal: boolean;
  consentValue: string;
};

type CookiesAction = {
  toggleCookies: () => void;
  setConsentValue: (value: string) => void;
  reset: () => void;
};

const initialState: CookiesState = {
  showCookiesModal: true,
  consentValue: `NOT_SET`,
};

export const useCookiesPersist = create<CookiesState & CookiesAction>()(
  persist(
    (set, get) => ({
      showCookiesModal: initialState.showCookiesModal,
      consentValue: initialState.consentValue,
      toggleCookies: () => {
        set({ showCookiesModal: !get().showCookiesModal });
      },
      setConsentValue: (value: string) => {
        set({ consentValue: value });
      },
      reset: () => {
        set(initialState);
      },
    }),
    { name: `instead-cookies` },
  ),
);
