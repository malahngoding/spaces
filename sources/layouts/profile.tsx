import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { UilUser, UilWallet, UilAward, UilCog } from '@iconscout/react-unicons';

import { Box } from '@components/design/box';
import { Button } from '@components/design/button';
import { Section } from '@components/design/section';
import { Heading, Caption } from '@components/design/typography';
import { Avatar, AvatarImage } from '@components/navigations/avatar';

import { BaseLayout } from './base';

interface ProfileLayoutProps {
  layout: {
    tab: number;
  };
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
  children: JSX.Element;
}

export const ProfileLayout = (props: ProfileLayoutProps) => {
  const router = useRouter();
  const t = useTranslations(`Profile`);
  const titleBuilder = (item: number): string => {
    switch (item) {
      case 0:
        return `${t(`profile`)} - ${props.currentUser.name}`;
      case 1:
        return `${t(`badge`)} - ${props.currentUser.name}`;
      case 2:
        return `${t(`wallet`)} - ${props.currentUser.name}`;
      case 3:
        return `${t(`settings`)} - ${props.currentUser.name}`;
      default:
        return `${t(`profile`)} - ${props.currentUser.name}`;
    }
  };

  return (
    <BaseLayout title={titleBuilder(props.layout.tab)}>
      <>
        <br />
        <Box>
          <Section
            css={{
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              justifyContent: `space-between`,
              '@sm': {
                flexDirection: `row`,
              },
            }}
          >
            <Box
              css={{
                display: `flex`,
                flexDirection: `column`,
                alignItem: `center`,
                justifyContent: `center`,
                alignText: `center`,
                '@sm': {
                  display: `flex`,
                  flexDirection: `column`,
                  alignItem: `flex-start`,
                  justifyContent: `flex-start`,
                  alignText: `center`,
                },
              }}
            >
              <Caption data-testid="about-us-text">
                {props.currentUser.bio}
              </Caption>
              <Heading>{t(`profile`)}</Heading>
            </Box>
            <Box>
              <Avatar css={{ width: 92, height: 92 }}>
                <AvatarImage
                  src={
                    `https://avatars.dicebear.com/api/miniavs/${props?.currentUser?.avatar}.svg` ||
                    `https://avatars.dicebear.com/api/miniavs/${new Date()}.svg`
                  }
                  role="button"
                />
              </Avatar>
            </Box>
          </Section>
          <Box
            css={{
              borderBottom: `1px solid $slate6`,
            }}
          >
            <Box
              css={{
                display: `flex`,
                flexDirection: `row`,
                overflowX: `scroll`,
                '@xs': {
                  marginX: `0`,
                },
                '@md': {
                  overflowX: `hidden`,
                },
                '@lg': {
                  marginX: `$xl`,
                },
              }}
            >
              <Button
                css={{
                  marginRight: `$xs`,
                  borderBottom:
                    props.layout.tab === 0
                      ? '4px solid $cyan8'
                      : '4px solid $slate1',
                }}
                type="button"
                alternative="ghost"
                onClick={() => router.push('/profile')}
              >
                <Box css={{ display: `block`, '@md': { display: `none` } }}>
                  <UilUser />
                </Box>
                <Box css={{ display: `none`, '@md': { display: `block` } }}>
                  {props.currentUser.name}
                </Box>
              </Button>
              <Button
                css={{
                  marginRight: `$xs`,
                  borderBottom:
                    props.layout.tab === 1
                      ? '4px solid $cyan8'
                      : '4px solid $slate1',
                }}
                type="button"
                alternative="ghost"
                onClick={() => router.push('/profile/badge')}
              >
                <Box css={{ display: `block`, '@md': { display: `none` } }}>
                  <UilAward />
                </Box>
                <Box css={{ display: `none`, '@md': { display: `block` } }}>
                  {t(`badge`)}
                </Box>
              </Button>
              <Button
                css={{
                  marginRight: `$xs`,
                  borderBottom:
                    props.layout.tab === 2
                      ? '4px solid $cyan8'
                      : '4px solid $slate1',
                }}
                type="button"
                alternative="ghost"
                onClick={() => router.push('/profile/wallets')}
              >
                <Box css={{ display: `block`, '@md': { display: `none` } }}>
                  <UilWallet />
                </Box>
                <Box css={{ display: `none`, '@md': { display: `block` } }}>
                  {t(`wallet`)}
                </Box>
              </Button>
              <Button
                css={{
                  marginRight: `$xs`,
                  borderBottom:
                    props.layout.tab === 3
                      ? '4px solid $cyan8'
                      : '4px solid $slate1',
                }}
                type="button"
                alternative="ghost"
                onClick={() => router.push('/profile/settings')}
              >
                <Box css={{ display: `block`, '@md': { display: `none` } }}>
                  <UilCog />
                </Box>
                <Box css={{ display: `none`, '@md': { display: `block` } }}>
                  {t(`settings`)}
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
        {props.children}
      </>
    </BaseLayout>
  );
};
