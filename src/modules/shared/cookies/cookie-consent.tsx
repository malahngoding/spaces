/**
 */
import { setConsentValue, state } from './cookie-consent.store';
import { Fragment } from 'react';
import { InsteadLocale } from '@modules/i18n';
import type { ReactElement } from 'react';
import { styledCookieConsent } from './cookie-consent.css';
import { useI18n } from 'next-rosetta';
import { useSnapshot } from 'valtio';
/**
 */
const CookieConsent = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();
  const snap = useSnapshot(state);

  return (
    <Fragment>
      {snap.consentValue === `neutral` ? (
        <Fragment>
          <div className={styledCookieConsent}>
            <p>{t(`cookies.firstConsent`)}</p>
            <p>{t(`cookies.secondConsent`)}</p>
            <button onClick={() => setConsentValue(`accept`)}>Accept</button>
            <button onClick={() => setConsentValue(`decline`)}>Decline</button>
          </div>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default CookieConsent;
