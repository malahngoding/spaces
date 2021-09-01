import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Heading,
  SubHeading,
  Title,
  SubTitle,
  Caption,
  Paragraph,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { GetStaticProps } from 'next';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function Home(props: HomeProps) {
  const { applicationName, repeater } = props;
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <h1 data-testid="welcome-text">Welcome to {applicationName}</h1>
        </Section>
        {repeater.map((item: number) => (
          <Section key={item}>
            <Heading>
              The wizard quickly jinxed the gnomes before they vaporized.
            </Heading>
            <SubHeading>
              The wizard quickly jinxed the gnomes before they vaporized.
            </SubHeading>
            <Title>
              The wizard quickly jinxed the gnomes before they vaporized.
            </Title>
            <SubTitle>
              The wizard quickly jinxed the gnomes before they vaporized.
            </SubTitle>
            <Caption>
              The wizard quickly jinxed the gnomes before they vaporized.
            </Caption>
            <Paragraph>
              The wizard quickly jinxed the gnomes before they vaporized.
            </Paragraph>
          </Section>
        ))}
      </Box>
    </BaseLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
      repeater: [1],
    },
  };
};
