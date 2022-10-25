/**
 *
 */
import { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { BaseLayout } from '@layouts/base';
import { Container } from '@components/wrapper/container';
import { Heading } from '@components/typography/heading';
import { InsteadLocale } from '@modules/i18n';
import { PageWrapper } from '@components/wrapper/page-wrapper';
import { Paragraph } from '@components/typography/paragraph';
/**
 *
 */
interface ChangelogPageProps {
  table: any;
}
export const ChangelogPage: NextPage<ChangelogPageProps> = (props) => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <BaseLayout title="Changelog">
      <PageWrapper>
        <Heading>{t('auth.title')}</Heading>
        <Paragraph>{t('auth.subTitle')}</Paragraph>
      </PageWrapper>
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
