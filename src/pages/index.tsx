import { GetStaticPropsContext } from 'next';

import { Hero } from '@components/branding/hero';
import { Box } from '@components/design/box';
import { BaseLayout } from '@layouts/base';

export default function Home() {
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Hero />
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
