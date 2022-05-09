import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import useSWR from 'swr';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { BadgeCard } from '@components/cards/badge-card';
import { getBadgeList } from '@services/badge-service';
import { Paragraph } from '@components/design/typography';

import type { GetServerSidePropsContext } from 'next';

interface ProfileProps {
  currentLocale: any;
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}

const fetcher = (url: string) => getBadgeList();

export default function Badge(props: ProfileProps) {
  const t = useTranslations(`Menu`);
  const { data, error } = useSWR('/getBadgeList', fetcher);

  const badgeList = data?.data.payload.list;

  return (
    <ProfileLayout layout={{ tab: 1 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section
          css={{
            display: `flex`,
            flexWrap: `wrap`,
          }}
        >
          {badgeList ? (
            <>
              {badgeList.map((item, index) => {
                return (
                  <Box key={index}>
                    <BadgeCard
                      title={item.badge.title}
                      description={
                        props.currentLocale === 'id'
                          ? item.badge.descriptionId
                          : item.badge.descriptionEn
                      }
                      media={item.badge.media}
                      type={item.badge.type}
                    />
                  </Box>
                );
              })}
            </>
          ) : (
            <Paragraph>Loading...</Paragraph>
          )}
          {error ? (
            <>
              <Paragraph>Error getting badge</Paragraph>
            </>
          ) : (
            <></>
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
        currentLocale,
        messages,
        currentUser: session.currentUser,
      },
    };
  }
}
