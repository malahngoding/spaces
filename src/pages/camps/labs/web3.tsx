import dynamic from 'next/dynamic';

import { BaseLayout } from '@layouts/base';
import { Section } from '@components/design/section';

import type { GetStaticPropsContext } from 'next';

export default function Web3Dapps() {
  const WalletComponent = dynamic(
    (): any =>
      import(`@components/wallet-handler`).then((mod) => mod.WalletHandler),
    { loading: () => <p>...</p>, ssr: false },
  );
  return (
    <BaseLayout title="Metamask Interaction">
      <Section>
        <WalletComponent />
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
