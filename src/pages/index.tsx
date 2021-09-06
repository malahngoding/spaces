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

  const allphabetString = `The wizard quickly jinxed the gnomes before they vaporized.`;

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            Welcome to {applicationName}
          </SubTitle>
        </Section>
        {repeater.map((item: number) => (
          <Section key={item}>
            <Heading>{allphabetString}</Heading>
            <SubHeading>{allphabetString}</SubHeading>
            <Title>{allphabetString}</Title>
            <SubTitle>{allphabetString}</SubTitle>
            <Caption>{allphabetString}</Caption>
            <Paragraph>{allphabetString}</Paragraph>
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
