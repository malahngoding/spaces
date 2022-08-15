/**
 */
import { Fragment } from 'react';
import { InsteadLocale } from '@modules/i18n';
import type { ReactElement } from 'react';
import { styledCookieConsent } from './cookie-consent.css';
import { useI18n } from 'next-rosetta';
/**
 */
const CookieConsent = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();
  const show: boolean = false;
  return (
    <Fragment>
      {show ? (
        <div className={styledCookieConsent}>
          <p>{t(`cookies.firstConsent`)}</p>
          <p>{t(`cookies.secondConsent`)}</p>
        </div>
      ) : (
        <Fragment />
      )}
    </Fragment>
  );
};

export default CookieConsent;
