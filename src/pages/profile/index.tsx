/* 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
/* Internal Modules Import */
import { ProfileLayout } from '@layouts/profile';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { Box } from '@components/design/box';
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
const DetailsFormLazy = dynamic(
  (): any =>
    import(`@components/forms/profile-details`).then((mod) => mod.DetailsForm),
  { ssr: false },
);
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
export default function Profile(props: ProfileProps) {
  const t = useTranslations(`Profile`);

  return (
    <ProfileLayout layout={{ tab: 0 }} currentUser={props.currentUser}>
      <Box>
        <br />
        <Section>
          <SubTitle>{t(`details`)}</SubTitle>
          <DetailsFormLazy />
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
