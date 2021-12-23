import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { DetailsForm } from '@components/profile/details-form';
import { MiscForm } from '@components/profile/misc-form';

interface ProfileProps {
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}

export default function Profile(props: ProfileProps) {
  const t = useTranslations(`Profile`);

  return (
    <ProfileLayout layout={{ tab: 0 }} currentUser={props.currentUser}>
      <Section>
        <SubTitle>{t(`details`)}</SubTitle>
        <DetailsForm />
        <SubTitle>{t(`misc`)}</SubTitle>
        <MiscForm />
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
