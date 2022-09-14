/**
 */
import { AltButton, Button } from '@components/button/base';
import { Fragment, Suspense } from 'react';
import { styledButtonAction, styledCookieConsent } from './cookie-consent.css';
import { Heading } from '@components/typography/heading';
import { InsteadLocale } from '@modules/i18n';
import { Paragraph } from '@components/typography/paragraph';
import type { ReactElement } from 'react';
import { useCookiesPersist } from './cookie-consent.store';
import { useI18n } from 'next-rosetta';
/**
 */
const CookieConsent = (): ReactElement => {
  const { t } = useI18n<InsteadLocale>();
  const showCookieModal = useCookiesPersist((state) => state.showCookiesModal);
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
            <Heading>🍪</Heading>
            <br />
            <Paragraph>{t(`cookies.firstConsent`)}</Paragraph>
            <Paragraph>{t(`cookies.secondConsent`)}</Paragraph>
            <br />
            <div className={styledButtonAction}>
              <Button
                onClick={() => {
                  handleConsent(`ACCEPT`);
                }}
              >
                {t(`cookies.acceptConsent`)}
              </Button>
              <AltButton
                onClick={() => {
                  handleConsent(`DECLINE`);
                }}
              >
                {t(`cookies.declineConsent`)}
              </AltButton>
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Suspense>
  );
};

export default CookieConsent;
