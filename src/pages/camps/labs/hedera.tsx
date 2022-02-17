import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

const TradingView = dynamic(() => import('../../../components/trading-view'), {
  ssr: false,
  suspense: true,
});

export default function Hedera() {
  return (
    <BaseLayout title="Hedera Hashgraph">
      <>
        <Suspense fallback={<p>Loading...</p>}>
          <TradingView />
        </Suspense>
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
  };
}
