/** 3rd Party Modules Import */
/** Internal Modules Import */
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
/** Types Import */
import type { GetStaticPropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignTypography(props: HomeProps) {
  const { applicationName, repeater } = props;
  const allphabetString = `The wizard quickly jinxed the gnomes before they vaporized.`;

  return (
    <DesignLayout title="Instead Typography">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">
            Our Styled Wall of Text
          </SubTitle>
          <Heading>Typography</Heading>
        </Section>
        {repeater.map((item: number) => (
          <Section key={item}>
            <Caption>Heading</Caption>
            <Heading>{allphabetString}</Heading>
            <Caption>SubHeading</Caption>
            <SubHeading>{allphabetString}</SubHeading>
            <Caption>Title</Caption>
            <Title>{allphabetString}</Title>
            <Caption>SubTitle</Caption>
            <SubTitle>{allphabetString}</SubTitle>
            <Caption>Caption</Caption>
            <Caption>{allphabetString}</Caption>
            <Caption>Paragraph</Caption>
            <Paragraph>{allphabetString}</Paragraph>
          </Section>
        ))}
      </Box>
    </DesignLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
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
