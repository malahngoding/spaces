import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { BadgeCard } from '@components/badge-card';

interface ProfileProps {
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}

export default function Badge(props: ProfileProps) {
  return (
    <ProfileLayout layout={{ tab: 1 }} currentUser={props.currentUser}>
      <Section
        css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
      >
        <BadgeCard
          title="Solidity"
          description="Get 1.00e46 / 10 Qt Coins per Second."
          image="https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:7301/2f83f515"
        />
        <BadgeCard
          title="On Going"
          description="Play the game for 365 days."
          image="https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6060/6c5252e"
        />
        <BadgeCard
          title="Develop Harder"
          description="Level up your Shield up to level 250."
          image="https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6958/54fa2f59"
        />
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
