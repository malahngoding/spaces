import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { BadgeCard } from '@components/badge-card';
import { getBadgeList } from '@services/badge-service';

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
  console.log(data, error);

  return (
    <ProfileLayout layout={{ tab: 1 }} currentUser={props.currentUser}>
      <Section
        css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
      >
        {/* {props.badge.map((item, index) => {
          return (
            <BadgeCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })} */}
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
