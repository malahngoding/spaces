/**
 */
import type { ReactElement } from 'react';
import { styledCookieConsent } from './cookie-consent.css';

const CookieConsent = (): ReactElement => {
  return (
    <div className={styledCookieConsent}>
      <div>COOOKIE CONSENT</div>
    </div>
  );
};

export default CookieConsent;
