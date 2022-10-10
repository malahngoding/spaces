/**
 *
 */
import type { GetStaticProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { AuthLayout } from '@layouts/auth';
import { ConnectForm } from '@modules/auth/connect-form';
import { Heading } from '@components/typography/heading';
import { InsteadLocale } from '@modules/i18n';
import { Logo } from '@components/branding/logo';
import { Paragraph } from '@components/typography/paragraph';
/**
 *
 */
interface ConnectPageProps {
  connect?: boolean;
}

export const ConnectPage: NextPage<ConnectPageProps> = (props) => {
  const { t } = useI18n<InsteadLocale>();

  return (
    <AuthLayout title={t('auth.title')}>
      <Logo size={72} />
      <Heading>{t('auth.title')}</Heading>
      <Paragraph>{t('auth.subTitle')}</Paragraph>
      <ConnectForm />
    </AuthLayout>
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

export default ConnectPage;
