/**
 */
import type { GetStaticProps, NextPage } from 'next';
import { BaseLayout } from '@layouts/base';
import { I18nProps } from 'next-rosetta';
import type { InsteadLocale } from '@modules/i18n';
/**
 *
 */
export const HomePage: NextPage = (props: any) => {
  return (
    <BaseLayout title="Hello World">
      <p>PANTHASM</p>
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
