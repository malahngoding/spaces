import { batch, observable } from '@legendapp/state';
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist';
import { ObservablePersistLocalStorage } from '@legendapp/state/local-storage';
import { enableLegendStateReact } from '@legendapp/state/react';

type CookiesState = {
  showCookiesModal: boolean;
  consentValue: string;
};

type CookiesAction = {
  setConsentValue: (value: string) => void;
  reset: () => void;
};

export const useCookiesPersist = observable<CookiesState>({
  showCookiesModal: true,
  consentValue: `NOT_SET`,
});

export const useCookiesPersistAction: CookiesAction = {
  setConsentValue: (value) => {
    batch(() => {
      useCookiesPersist.showCookiesModal.set(false);
      useCookiesPersist.consentValue.set(value);
    });
  },
  reset: () => {
    batch(() => {
      useCookiesPersist.showCookiesModal.set(true);
      useCookiesPersist.consentValue.set(`NOT_SET`);
    });
  },
};

persistObservable(useCookiesPersist, {
  local: 'instead-cookies',
});

configureObservablePersistence({
  persistLocal: ObservablePersistLocalStorage,
});

enableLegendStateReact();
