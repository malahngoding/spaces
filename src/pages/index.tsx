import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function Home(props: HomeProps) {
  const { applicationName } = props;

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            Welcome to {applicationName}
          </SubTitle>
          <Heading>World of Malah Ngoding</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}
