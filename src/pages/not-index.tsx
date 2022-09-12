/*
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import { Button } from '@components/button/base';
import type { InsteadLocale } from '@modules/i18n';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { useCookiesPersist } from '@modules/cookies/cookie-consent.store';
/*
 *
 */
const LocaleSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/locale-switcher`),
  { ssr: false },
);
const ThemeSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/theme-switcher`),
  { ssr: false },
);
const PingLazy = dynamic((): any => import(`@modules/shared/ping`), {
  ssr: false,
});
/**
 */
export const NotIndexPage: NextPage = (props: any) => {
  const { t } = useI18n<InsteadLocale>();

  /**
   *
   */
  const resetConsentValue = useCookiesPersist((state) => state.reset);
  const handleReset = (): void => {
    resetConsentValue();
  };

  return (
    <BaseLayout title="TEST_PAGE_NOT_INDEXED">
      <Button onClick={handleReset}>Reset Cookie Consent</Button>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <LocaleSwitcherLazy />
      </Suspense>
      <br />
      <Suspense fallback={<p>Loading...</p>}>
        <ThemeSwitcherLazy />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <PingLazy />
      </Suspense>
      <br />
      <div style={{ display: `flex`, flexWrap: `wrap` }}>
        {Array.from(Array(100).keys()).map((item: number) => {
          return (
            <div key={item} style={{ marginRight: `1em` }}>
              <h1>
                {t('title')} <span className="Test">{item}</span>
              </h1>
            </div>
          );
        })}
      </div>
    </BaseLayout>
  );
};

export const getStaticProps: GetStaticProps<I18nProps<InsteadLocale>> = async (
  context,
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};

export default NotIndexPage;
