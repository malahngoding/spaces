/**
 */
import type { GetStaticProps, NextPage } from 'next';
import { BaseLayout } from '@layouts/base';
import { I18nProps } from 'next-rosetta';
import type { InsteadLocale } from '@modules/i18n';
/**
 *
 */
export const LearnPage: NextPage = (props: any) => {
  return (
    <BaseLayout title="Our Learning">
      <p>Learn</p>
    </BaseLayout>
  );
};

export default LearnPage;
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
