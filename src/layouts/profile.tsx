import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

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
        return `${t(`settings`)} - ${props.currentUser.name}`;
      default:
        return `${t(`profile`)} - ${props.currentUser.name}`;
    }
  };

  const handleRedirection = (): void => {};

  return (
    <BaseLayout title={titleBuilder(props.layout.tab)}>
      <>
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
            <Box>
              <Caption data-testid="about-us-text">
                {props.currentUser.bio}
              </Caption>
              <Heading>{t(`profile`)}</Heading>
            </Box>
            <Box>
              <Avatar css={{ width: 92, height: 92 }}>
                <AvatarImage
                  src={
                    props.currentUser.avatar ||
                    `https://avatars.dicebear.com/api/open-peeps/someone.svg`
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
                {props.currentUser.name}
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
                {t(`badge`)}
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
                onClick={() => router.push('/profile/settings')}
              >
                {t(`settings`)}
              </Button>
            </Box>
          </Box>
        </Box>
        {props.children}
      </>
    </BaseLayout>
  );
};
