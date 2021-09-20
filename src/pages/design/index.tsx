import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';
import { GetStaticProps } from 'next';

interface HomeProps {
  applicationName: string;
}

export default function DesignButton(props: HomeProps) {
  const { applicationName } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <Section>
          <h1 data-testid="welcome-text">.instead</h1>
          <p>{applicationName} Design</p>
        </Section>
      </Box>
    </DesignLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
    },
  };
};
