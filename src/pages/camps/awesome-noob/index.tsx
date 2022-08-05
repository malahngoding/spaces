/** 3rd Party Modules Import */
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
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
interface AwesomeNoobsProps {}

export default function AwesomeNoobs(props: AwesomeNoobsProps) {
  return (
    <BaseLayout title="Awesome Noobs">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">Instead Hashnaut</SubTitle>
          <Heading>Awesome Noobs</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
