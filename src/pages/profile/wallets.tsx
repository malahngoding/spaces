/* 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import useSWR from 'swr';
import Image from 'next/image';
/* Internal Modules Import */
import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { Paragraph, SubTitle } from '@components/design/typography';
import { getProfileWallets } from '@services/profile-service';
import { Card } from '@components/design/card';
/* Types Import */
import type { GetServerSidePropsContext } from 'next';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Next Laziefied Components Import
 * @private
 */
/**
 * Next Page Components Props Declaration
 * @private
 */
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
/**
 * Next Page Component Declaration
 * @public
 */
export default function Settings(props: CryptoWalletsProps) {
  const t = useTranslations(`Profile`);
  const { data, error } = useSWR('/getProfileWallets', fetcher);

  const walletList = data?.data.payload.wallets;

  const openExplorer = (index: number, address: string): void => {
    if (index === 0 && address !== ``) {
      window.open(`https://polygonscan.com/address/${address}`, '_blank');
    } else if (index === 1 && address !== ``) {
      console.debug(address);
      window.open(`https://hashscan.io/#/testnet/account/${address}`, '_blank');
    }
  };

  return (
    <ProfileLayout layout={{ tab: 2 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section
          css={{
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gap: `$xs`,
            '@lg': { gridTemplateColumns: `1fr 1fr` },
          }}
        >
          {walletList ? (
            <>
              {walletList.map((item, index) => {
                return (
                  <Card
                    key={index}
                    css={{ width: `100%` }}
                    onClick={() => openExplorer(index, item)}
                  >
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
                        css={{
                          fontWeight: `$normal`,
                          fontSize: `$sm`,
                          wordBreak: `break-all`,
                        }}
                      >
                        {item === '' ? t(`noWallet`) : `${item}`}
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
/**
 * Next Page Server Code Declaration
 * @public
 */
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
