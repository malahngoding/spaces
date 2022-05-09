import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import useSWR from 'swr';
import Image from 'next/image';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { Paragraph, SubTitle } from '@components/design/typography';
import { getProfileWallets } from '@services/profile-service';
import { Card } from '@components/design/card';

import type { GetServerSidePropsContext } from 'next';

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
  const { data, error } = useSWR('/getProfileWallets', fetcher);

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
                  <Card key={index} css={{ width: `100%` }}>
                    <Box css={{ height: 64, width: 64, borderRadius: `50%` }}>
                      <Image
                        width={48}
                        height={48}
                        layout="fixed"
                        src={
                          index === 0
                            ? `/static/wallets/polygon.png`
                            : `/static/wallets/hedera.png`
                        }
                        alt={index === 0 ? `EVM Address` : `Hedera Address`}
                      />
                    </Box>

                    <SubTitle css={{ textOverflow: `ellipsis` }}>
                      {t(`verified`, {
                        wallet: index === 0 ? `EVM Address` : `Hedera Address`,
                      })}
                    </SubTitle>
                    {index === 0 ? (
                      <SubTitle
                        css={{ fontWeight: `$normal`, fontSize: `$sm` }}
                      >
                        {item === ''
                          ? t(`noWallet`)
                          : `${item.slice(0, 5)}...${item.slice(-4)}`}
                      </SubTitle>
                    ) : (
                      <SubTitle
                        css={{ fontWeight: `$normal`, fontSize: `$sm` }}
                      >
                        {item === '' ? t(`noWallet`) : item}
                      </SubTitle>
                    )}
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
