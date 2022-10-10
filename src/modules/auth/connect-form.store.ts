import create from 'zustand';
import { persist } from 'zustand/middleware';

type ConnectFormState = {
  showCookiesModal: boolean;
  consentValue: string;
};

type ConnectFormAction = {
  toggleCookies: () => void;
  setConsentValue: (value: string) => void;
  reset: () => void;
};

const initialState: ConnectFormState = {
  showCookiesModal: true,
  consentValue: `NOT_SET`,
};

export const useCookiesPersist = create<ConnectFormState & ConnectFormAction>()(
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
