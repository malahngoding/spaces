import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

import type { GetServerSidePropsContext } from 'next';

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
