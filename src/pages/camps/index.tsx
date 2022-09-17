/**
 */
import type { GetStaticProps, NextPage } from 'next';
import { BaseLayout } from '@layouts/base';
import { I18nProps } from 'next-rosetta';
import type { InsteadLocale } from '@modules/i18n';
/**
 *
 */
export const CampsPage: NextPage = (props: any) => {
  return (
    <BaseLayout title="Your Camps">
      <p>Camps</p>
    </BaseLayout>
  );
};

export default CampsPage;
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
