/** 3rd Party Modules Import */
/** Internal Modules Import */
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
/** Internal Modules Import */
import type { GetServerSidePropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */

export default function Marketplace() {
  return (
    <BaseLayout title="Hashable">
      <Section>
        <SubTitle data-testid="about-us-text">When both world collide</SubTitle>
        <Heading>Hashable</Heading>
      </Section>
    </BaseLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
