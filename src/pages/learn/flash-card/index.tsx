import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { getSession } from 'next-auth/react';
import { AuthenticationBlock } from '@components/authentication-block';

interface FlashCardProps {
  currentSession: any;
}

export default function FlashCard(props: FlashCardProps) {
  const t = useTranslations(`FlashCard`);

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <Heading>{t(`flashCardTitle`)}</Heading>
        </Section>
        <AuthenticationBlock currentSession={props.currentSession}>
          <Section
            css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
          >
            Hello
          </Section>
        </AuthenticationBlock>
      </Box>
    </BaseLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const messages = await import(`../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      currentSession: session,
    },
  };
}
