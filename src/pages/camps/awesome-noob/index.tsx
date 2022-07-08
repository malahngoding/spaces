/* 3rd Party Modules Import */
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
/* Types Import */
import type { GetStaticPropsContext } from 'next';
/**
 * Internal Type Declaration
 * @private
 */
/**
 * Next Laziefied Components Import
 * @private
 */
/**
 * Next Page Components Props Declaration
 * @private
 */
interface AwesomeNoobsProps {}
/**
 * Next Page Component Declaration
 * @public
 */
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
 * @public
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
