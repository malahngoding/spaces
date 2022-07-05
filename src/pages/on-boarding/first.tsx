import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { AllCenterColumnBox, Box } from '@components/design/box';
import { Title } from '@components/design/typography';
import { Button } from '@components/design/button';

import type { GetServerSidePropsContext } from 'next';

interface OnBoardingFirstProps {
  redirectionUrl: string;
}

export default function OnBoardingFirst(props: OnBoardingFirstProps) {
  const t = useTranslations(`OnBoarding`);
  return (
    <AllCenterColumnBox css={{ minHeight: `100vh` }}>
      <Box css={{ marginBottom: `$lg` }}>
        <Title>{t(`firstMessage`)}</Title>
      </Box>
      <Link href={props.redirectionUrl} passHref>
        <Button as="a">OK</Button>
      </Link>
    </AllCenterColumnBox>
  );
}

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
