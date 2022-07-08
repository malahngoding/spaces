/* 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
/* Internal Modules Import */
import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { Box } from '@components/design/box';
import { Paragraph, SubTitle } from '@components/design/typography';
/* Types Import */
import type { GetServerSidePropsContext } from 'next';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Next Laziefied Components Import
 * @private
 */
/**
 * Next Page Components Props Declaration
 * @private
 */
interface ProfileProps {
  currentUser: {
    avatar: string;
    name: string;
    bio: string;
    email: string;
    joinedSince: string;
  };
}
/**
 * Next Page Component Declaration
 * @public
 */
export default function Settings(props: ProfileProps) {
  const t = useTranslations(`Profile`);

  const ThemeToggleComponent = dynamic(
    (): any =>
      import(`@components/theme-toggle`).then((mod) => mod.ThemeToggle),
    { ssr: false },
  );

  const MarqueeToggleComponent = dynamic(
    (): any =>
      import(`@components/marquee-toggle`).then((mod) => mod.MarqueeToggle),
    { ssr: false },
  );

  return (
    <ProfileLayout layout={{ tab: 3 }} currentUser={props.currentUser}>
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
        <Section>
          <SubTitle>Marquee</SubTitle>
          <Box
            css={{
              display: `flex`,
              flexDirection: `row`,
              alignItems: `center`,
            }}
          >
            <MarqueeToggleComponent />
          </Box>
        </Section>
      </Box>
    </ProfileLayout>
  );
}
/**
 * Next Page Server Code Declaration
 * @public
 */
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
