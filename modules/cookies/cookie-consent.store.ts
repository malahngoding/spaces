import { atom } from "jotai";

type CookiesState = {
  showCookiesModal: boolean;
  consentValue: string;
};

const initialState: CookiesState = {
  showCookiesModal: true,
  consentValue: `NOT_SET`,
};

const strAtom = atom(localStorage.getItem('instead-cookies') ?? JSON.stringify(initialState))

export const strAtomWithPersistence = atom(
  (get) => get(strAtom),
  (_get, set, value) => {
    set(strAtom, JSON.stringify(value))
    localStorage.setItem('instead-cookies', JSON.stringify(value))
  }
)


type CookiesAction = {
  toggleCookies: () => void;
  setConsentValue: (value: string) => void;
  reset: () => void;
};


