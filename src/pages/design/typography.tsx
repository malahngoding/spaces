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
import { DesignLayout } from '@layouts/design-layout';
import { GetStaticProps } from 'next';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignTypography(props: HomeProps) {
  const { applicationName, repeater } = props;
  const allphabetString = `The wizard quickly jinxed the gnomes before they vaporized.`;

  return (
    <DesignLayout title="Hello World!">
      <Box>
        <Section>
          <h1 data-testid="welcome-text">.instead</h1>
          <p>{applicationName} Design</p>
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
    </DesignLayout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const applicationName = `Malah Ngoding`;
  return {
    props: {
      applicationName,
      repeater: [1, 2, 3, 4, 11, 12, 13, 14],
    },
  };
};
