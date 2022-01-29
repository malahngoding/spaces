import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';

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

  const DetailsFormComponent = dynamic((): any =>
    import(`@components/profile/details-form`).then((mod) => mod.DetailsForm),
  );

  return (
    <ProfileLayout layout={{ tab: 0 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section>
          <SubTitle>{t(`details`)}</SubTitle>
          <DetailsFormComponent />
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
