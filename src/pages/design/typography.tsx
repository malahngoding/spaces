import { GetStaticPropsContext } from 'next';

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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const applicationName = `Malah Ngoding`;

  return {
    props: {
      messages,
      applicationName,
      repeater: [1],
    },
  };
}
