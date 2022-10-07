/*
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import { Button } from '@components/button/base';
import type { InsteadLocale } from '@modules/i18n';
import { Paragraph } from '@components/typography/paragraph';
import dynamic from 'next/dynamic';
import { useCookiesPersist } from '@modules/cookies/cookie-consent.store';
/*
 *
 */
const LocaleSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/locale-switcher`),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: `38.4px` }}>
        <Paragraph>Loading..</Paragraph>
      </div>
    ),
  },
);
const ThemeSwitcherLazy = dynamic(
  (): any => import(`@modules/shared/theme-switcher`),
  {
    ssr: false,
    loading: () => (
      <div style={{ height: `66.4px` }}>
        <Paragraph>Loading..</Paragraph>
      </div>
    ),
  },
);
const ServicePingLazy = dynamic((): any => import(`@modules/shared/ping`), {
  ssr: false,
  loading: () => (
    <div style={{ height: `39.2px` }}>
      <Paragraph>Loading..</Paragraph>
    </div>
  ),
});
/**
 */
export const ExperimentsPage: NextPage = (props: any) => {
  const { t } = useI18n<InsteadLocale>();

  /**
   *
   */
  const reset = useCookiesPersist((state) => state.reset);
  const handleReset = (): void => {
    reset();
  };

  return (
    <BaseLayout title="About Us">
      <Button onClick={handleReset}>Reset Cookie Consent</Button>
      <br />
      <LocaleSwitcherLazy />
      <br />
      <ThemeSwitcherLazy />
      <br />
      <ServicePingLazy />
      <br />
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

export default ExperimentsPage;
