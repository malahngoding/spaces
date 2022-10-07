/**
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import { Hero } from '@modules/landing/hero';
import type { InsteadLocale } from '@modules/i18n';
/**
 *
 */
export const HomePage: NextPage = (props: any) => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <BaseLayout title="Hello World">
      <Hero title={t('title')} subTitle={t('subTitle')} />
    </BaseLayout>
  );
};

export default HomePage;
/**
 *
 */
export const getStaticProps: GetStaticProps<I18nProps<InsteadLocale>> = async (
  context,
) => {
  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};
