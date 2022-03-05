import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';
import {
  Heading,
  Paragraph,
  SubTitle,
  Title,
} from '@components/design/typography';

import type { GetStaticPropsContext } from 'next';

interface HomeProps {
  applicationName: string;
  repeater: number[];
}

export default function DesignButton(props: HomeProps) {
  const sizeBox = `96px`;
  const { applicationName, repeater } = props;
  return (
    <DesignLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">
            The Color of Malah Ngoding
          </SubTitle>
          <Heading>The Pallete</Heading>
        </Section>
        <Section>
          <Title id="slate"># Slate</Title>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {repeater.map((item: number) => (
            <Box
              key={item}
              css={{
                height: `${sizeBox}`,
                width: `${sizeBox}`,
                backgroundColor: `$slate${item.toString()}`,
              }}
            />
          ))}
        </Section>
        <Section>
          <Title id="slate"># Cyan</Title>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {repeater.map((item: number) => (
            <Box key={item}>
              <Box
                css={{
                  height: `${sizeBox}`,
                  width: `${sizeBox}`,
                  backgroundColor: `$cyan${item.toString()}`,
                }}
              />
            </Box>
          ))}
        </Section>
        <Section>
          <Title id="slate"># Crimson</Title>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {repeater.map((item: number) => (
            <Box key={item}>
              <Box
                css={{
                  height: `${sizeBox}`,
                  width: `${sizeBox}`,
                  backgroundColor: `$crimson${item.toString()}`,
                }}
              />
            </Box>
          ))}
        </Section>
        <Section>
          <Paragraph>*adopted from Radix Colors A project by Modulz.</Paragraph>
        </Section>
        <Section>
          <Title id="slate"># Sweetie16</Title>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {[...repeater, 13, 14, 15, 16].map((item: number) => (
            <Box key={item}>
              <Box
                css={{
                  height: `${sizeBox}`,
                  width: `${sizeBox}`,
                  backgroundColor: `$sweet${item.toString()}`,
                }}
              />
            </Box>
          ))}
        </Section>
        <Section>
          <Paragraph>
            *adopted from SWEETIE 16 PALETTE Palette created by GrafxKid.
          </Paragraph>
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
      repeater: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  };
}
