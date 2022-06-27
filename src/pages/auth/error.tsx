import { useRouter } from 'next/router';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Paragraph, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

export default function AuthError() {
  const router = useRouter();

  return (
    <BaseLayout title="Hello Error!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">Unexpected Error</SubTitle>
          <Paragraph css={{ fontFamily: `$mono`, wordWrap: `break-word` }}>
            {router.query.error}
          </Paragraph>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
