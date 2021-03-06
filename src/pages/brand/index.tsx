/** 3rd Party Modules Import */
import Image from 'next/image';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { DesignLayout } from '@layouts/design-layout';
import {
  Heading,
  Title,
  SubTitle,
  Paragraph,
} from '@components/design/typography';
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
}

export default function TheBrand(props: HomeProps) {
  const { applicationName } = props;
  return (
    <DesignLayout title="Instead  Brand!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">Instead Malah Ngoding</SubTitle>
          <Heading>{applicationName} Brand</Heading>
        </Section>
        <Section>
          <Title># The Brand</Title>
          <Image
            src="/static/favicons/android-chrome-192x192.png"
            height={180}
            width={180}
            alt="Instead Malah Ngoding"
          />
          <Paragraph>
            The Malah Ngoding Instead logo is our unique mark. It can be used as
            a solo element in specific contexts and as a graphic shorthand for
            Malah Ngoding.
          </Paragraph>
          <Title># The Wordmark</Title>
          <Heading>Malah Ngoding</Heading>
          <Paragraph>
            This word mark should be used seldomly and in special occasions.
            Please use the full instead logo lockup (horizontal, stacked and
            centered) version with the Instead to reinforce our brand identity.
          </Paragraph>
          <Title># Instead</Title>
          <Box
            css={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `flex-start`,
              alignItems: `center`,
            }}
          >
            <Image
              src="/static/favicons/android-chrome-512x512.png"
              height={240}
              width={240}
              alt="Instead Malah Ngoding"
            />
            <Box css={{ marginTop: `32px`, marginLeft: `16px` }}>
              <Heading css={{ margin: 0, padding: 0 }}>Malah</Heading>
              <Heading css={{ margin: 0, padding: 0 }}>Ngoding</Heading>
            </Box>
          </Box>
          <Paragraph>
            The Malah Ngoding logo is a combination of our Logo and Wordmark
            together served as our identity.
          </Paragraph>
        </Section>
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
    },
  };
}
