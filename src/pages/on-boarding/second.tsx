/* 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
/* Internal Modules Import */
import { AllCenterColumnBox, Box } from '@components/design/box';
import { Title } from '@components/design/typography';
import { Section } from '@components/design/section';
import { BlankLayout } from '@layouts/blank';
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
const OnBoardingReasonLazy = dynamic(
  (): any =>
    import(`@components/forms/onboarding-reason`).then(
      (mod) => mod.OnBoardingReason,
    ),
  { ssr: false },
);
/**
 * Next Page Components Props Declaration
 * @private
 */
interface OnBoardingSecondProps {
  redirectionUrl: string;
}
/**
 * Next Page Component Declaration
 * @public
 */
export default function OnBoardingSecond(props: OnBoardingSecondProps) {
  const t = useTranslations(`OnBoarding`);
  return (
    <BlankLayout title={t(`secondMessage`)}>
      <AllCenterColumnBox
        css={{
          minHeight: `100vh`,
          backgroundColor: `$slate1`,
          justifyContent: `flex-start`,
        }}
      >
        <Box as="img" src={`/static/images/homepage-globe.png`} alt="Global" />
        <Section css={{ marginBottom: `$lg` }}>
          <Title>{t(`secondMessage`)}</Title>
        </Section>
        <Section>
          <OnBoardingReasonLazy />
        </Section>
      </AllCenterColumnBox>
    </BlankLayout>
  );
}
/**
 * Next Page Server Code Declaration
 * @public
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const redirectionUrl = context.query.redirect;
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
        redirectionUrl,
      },
    };
  }
}
