import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface LearnProps {
  applicationName: string;
  repeater: number[];
}

export default function Camps(props: LearnProps) {
  const { applicationName } = props;

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            Welcome to {applicationName}
          </SubTitle>
          <Heading>Malah Ngoding Learn</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}
