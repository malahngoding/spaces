import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { Paragraph, SubTitle } from '@components/design/typography';
import { getProfileWallets } from '@services/profile-service';
import { Card } from '@components/design/card';

import type { GetServerSidePropsContext } from 'next';
import useSWR from 'swr';

interface CryptoWalletsProps {
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}

const fetcher = (url: string) => getProfileWallets();

export default function Settings(props: CryptoWalletsProps) {
  const t = useTranslations(`Profile`);
  const { data, error } = useSWR('/api/user', fetcher);

  const walletList = data?.data.payload.wallets;

  return (
    <ProfileLayout layout={{ tab: 2 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section
          css={{
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gap: `$xs`,
            '@md': { gridTemplateColumns: `1fr 1fr` },
          }}
        >
          {walletList ? (
            <>
              {walletList.map((item, index) => {
                return (
                  <Card key={index}>
                    <SubTitle>
                      Verified {index === 0 ? `EVM Address` : `Hedera Address`}
                    </SubTitle>
                    <SubTitle css={{ fontWeight: `$normal`, fontSize: `$sm` }}>
                      {item === '' ? t(`noWallet`) : item}
                    </SubTitle>
                  </Card>
                );
              })}
            </>
          ) : (
            <Paragraph>Loading...</Paragraph>
          )}
        </Section>
      </Box>
    </ProfileLayout>
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
    const messages = await import(`../../lang/${currentLocale}.json`).then(
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
