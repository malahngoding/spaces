import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { getSession } from 'next-auth/react';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle, Title } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

export default function Wallet() {
  const WalletComponent = dynamic(
    (): any =>
      import(`@components/wallet-handler`).then((mod) => mod.WalletHandler),
    { loading: () => <p>...</p> },
  );

  const t = useTranslations(`Inventory`);

  return (
    <BaseLayout title={t(`title`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">{t(`welcome`)}</SubTitle>
          <Heading>{t(`title`)}</Heading>
        </Section>
        <Section>
          <WalletComponent />
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session === null) {
    return {
      redirect: {
        destination: '/',
      },
    };
  } else {
    const currentLocale = context.locale;
    const messages = await import(`../lang/${currentLocale}.json`).then(
      (module) => module.default,
    );
    return {
      props: {
        messages,
        currentUser: session.currentUser,
      },
    };
  }
}
