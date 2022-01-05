import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { BadgeCard } from '@components/badge-card';
import { getBadgeList } from '@services/badge-service';
import { Paragraph } from '@components/design/typography';

interface ProfileProps {
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
  const { data, error } = useSWR('/api/user', fetcher);

  const badgeList = data?.data.payload.list;

  return (
    <ProfileLayout layout={{ tab: 1 }} currentUser={props.currentUser}>
      <Section
        css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
      >
        {badgeList ? (
          <>
            {badgeList.map((item, index) => {
              return (
                <Box
                  key={index}
                  css={{
                    marginTop: `$md`,
                    marginRight: `$md`,
                  }}
                >
                  <BadgeCard
                    title={item.badge.title}
                    description={item.badge.description}
                    media={item.badge.media}
                    type="MOVING"
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
