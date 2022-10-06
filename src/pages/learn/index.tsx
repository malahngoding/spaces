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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/%E5%A5%B3-order.gif/255px-%E5%A5%B3-order.gif"
        alt="KU NO ICHI"
      />
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
