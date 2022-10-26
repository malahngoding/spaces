/**
 *
 */
import type { GetServerSideProps, NextPage } from 'next';
import { I18nProps, useI18n } from 'next-rosetta';
import { AuthLayout } from '@layouts/auth';
import { ConnectForm } from '@modules/auth/connect-form';
import { Heading } from 'components/typography/heading';
import { InsteadLocale } from '@modules/i18n';
import Link from 'next/link';
import { Logo } from 'components/branding/logo';
import { Paragraph } from 'components/typography/paragraph';
import { authOptions } from '@pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

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
      <Link href={`/`} passHref>
        <button>
          <Logo size={72} />
        </button>
      </Link>
      <Heading>{t('auth.title')}</Heading>
      <Paragraph>{t('auth.subTitle')}</Paragraph>
      <ConnectForm />
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps<
  I18nProps<InsteadLocale>
> = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const locale = context.locale || context.defaultLocale;
  const { table = {} } = await import(`@modules/i18n/${locale}`);
  return {
    props: { table },
  };
};

export default ConnectPage;
