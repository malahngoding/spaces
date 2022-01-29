import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import dynamic from 'next/dynamic';
import { Box } from '@components/design/box';
import { Caption, Paragraph, SubTitle } from '@components/design/typography';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations(`Profile`);

  const ThemeToggleComponent = dynamic((): any =>
    import(`@components/theme-toggle`).then((mod) => mod.ThemeToggle),
  );

  return (
    <ProfileLayout layout={{ tab: 2 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section>
          <SubTitle>{t(`theme`)}</SubTitle>
          <Box
            css={{
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
            }}
          >
            <ThemeToggleComponent />
            <Paragraph css={{ marginBottom: 0, marginLeft: `$sm` }}>
              {t(`themeMessage`)}
            </Paragraph>
          </Box>
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
