import { GetStaticPropsContext } from 'next';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';

interface HomeProps {
  applicationName: string;
}

export default function DesignButton(props: HomeProps) {
  const { applicationName } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <h1 data-testid="welcome-text">.instead</h1>
          <p>{applicationName} Design</p>
        </Section>
      </Box>
    </DesignLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const applicationName = `Malah Ngoding`;

  return {
    props: {
      messages,
      applicationName,
    },
  };
}
