import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { AllCenterColumnBox, Box } from '@components/design/box';

import type { GetServerSidePropsContext } from 'next';

interface OnBoardingFirstProps {}

export default function OnBoardingFirst(props: OnBoardingFirstProps) {
  return (
    <AllCenterColumnBox css={{ minHeight: `100vh` }}>
      <Box>Hello on boarder</Box>
    </AllCenterColumnBox>
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
      },
    };
  }
}
