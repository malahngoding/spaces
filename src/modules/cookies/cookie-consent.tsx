/**
 */
import { Fragment, Suspense } from 'react';
import { InsteadLocale } from '@modules/i18n';
import type { ReactElement } from 'react';
import { styledCookieConsent } from './cookie-consent.css';
import { useCookiesPersist } from './cookie-consent.store';
import { useI18n } from 'next-rosetta';
/**
 */
const CookieConsent = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();
  const showCookieModal = useCookiesPersist((state) => state.showCookies);
  const toggleCookies = useCookiesPersist((state) => state.toggleCookies);
  const setConsentValue = useCookiesPersist((state) => state.setConsentValue);

  const handleConsent = (value: string) => {
    toggleCookies();
    setConsentValue(value);
  };

  return (
    <Suspense>
      {showCookieModal ? (
        <Fragment>
          <div className={styledCookieConsent}>
            <p>{t(`cookies.firstConsent`)}</p>
            <p>{t(`cookies.secondConsent`)}</p>
            <button onClick={() => handleConsent(`ACCEPT`)}>
              {t(`cookies.acceptConsent`)}
            </button>
            <button onClick={() => handleConsent(`DECLINE`)}>
              {t(`cookies.declineConsent`)}
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Suspense>
  );
};

export default CookieConsent;
