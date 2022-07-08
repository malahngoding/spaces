/* 3rd Party Modules Import */
import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
/* Internal Modules Import */
import { AllCenterColumnBox, Box } from '@components/design/box';
import { Title } from '@components/design/typography';
import { Section } from '@components/design/section';
import { Button } from '@components/design/button';
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
/**
 * Next Page Components Props Declaration
 * @private
 */
interface OnBoardingFirstProps {
  redirectionUrl: string;
}
/**
 * Next Page Component Declaration
 * @public
 */
export default function OnBoardingFirst(props: OnBoardingFirstProps) {
  const t = useTranslations(`OnBoarding`);
  return (
    <BlankLayout title={t(`firstMessage`)}>
      <AllCenterColumnBox css={{ minHeight: `100vh` }}>
        <Section>
          <Box css={{ marginBottom: `$lg` }}>
            <Title>{t(`firstMessage`)}</Title>
          </Box>
          <Link
            href={`/on-boarding/second?redirect=${props.redirectionUrl}`}
            passHref
          >
            <Button alternative={'secondary'} as="a">
              {t(`next`)}
            </Button>
          </Link>
        </Section>
        <Box css={{ position: `fixed`, bottom: -100 }}>
          <Box
            as="img"
            src={`/static/images/hashnaut_awesome.png`}
            alt="Emang"
            height={180}
          />
        </Box>
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
