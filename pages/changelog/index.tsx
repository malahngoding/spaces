/**
 *
 */
import { GetStaticProps, NextPage } from 'next';
import { BaseLayout } from '@layouts/base';
import { I18nProps } from 'next-rosetta';
import { InsteadLocale } from '@modules/i18n';
/**
 *
 */
interface ChangelogPageProps {
  table: any;
}
export const ChangelogPage: NextPage<ChangelogPageProps> = (props) => {
  return (
    <BaseLayout title="Hello World">
      <div>TEST</div>
    </BaseLayout>
  );
};

export default ChangelogPage;
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
