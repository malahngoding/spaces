import { GetStaticPropsContext } from 'next';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface AboutUsProps {
  applicationName: string;
  repeater: number[];
}

export default function AboutUs(props: AboutUsProps) {
  const { applicationName } = props;

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">
            Where you can be helped
          </SubTitle>
          <Heading>Help & Faqs</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
