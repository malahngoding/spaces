import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';

interface ProfileProps {
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}
export default function Settings(props: ProfileProps) {
  return (
    <ProfileLayout layout={{ tab: 2 }} currentUser={props.currentUser}>
      <Section>Settings</Section>
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
