import { getSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { AllCenterColumnBox } from '@components/design/box';
import { Title } from '@components/design/typography';
import { Section } from '@components/design/section';
import { BlankLayout } from '@layouts/blank';

import type { GetServerSidePropsContext } from 'next';

interface OnBoardingSecondProps {
  redirectionUrl: string;
}

export default function OnBoardingSecond(props: OnBoardingSecondProps) {
  const t = useTranslations(`OnBoarding`);
  return (
    <BlankLayout title={t(`secondMessage`)}>
      <AllCenterColumnBox css={{ minHeight: `100vh` }}>
        <Section css={{ marginBottom: `$lg` }}>
          <Title>{t(`secondMessage`)}</Title>
        </Section>
      </AllCenterColumnBox>
    </BlankLayout>
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
