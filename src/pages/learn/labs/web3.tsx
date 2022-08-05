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
  const RainbowKit = dynamic(
    (): any => import(`@components/rainbow`).then((mod) => mod.Rainbow),
    { loading: () => <p>...</p>, ssr: false },
  );
  return (
    <BaseLayout title="web3">
      <>
        <br />
        <Section css={{ display: `none` }}>
          <WalletComponent />
        </Section>
        <Section>
          <RainbowKit />
        </Section>
      </>
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
    revalidate: 60 * 60 * 24,
  };
}
