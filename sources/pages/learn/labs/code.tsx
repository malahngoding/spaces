import { BaseLayout } from '@layouts/base';
import dynamic from 'next/dynamic';

import { Paragraph } from '@components/design/typography';
import { Section } from '@components/design/section';

import type { GetStaticPropsContext } from 'next';

const LazifiedSandpackCodeInstead = dynamic(
  (): any =>
    import(`@components/sandpack`).then((mod) => mod.SandpackCodeInstead),
  { ssr: false },
);

export default function Code() {
  return (
    <BaseLayout title="Code">
      <Section>
        <LazifiedSandpackCodeInstead />
        <Paragraph>Code</Paragraph>
      </Section>
    </BaseLayout>
  );
}

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
