import { BaseLayout } from '@layouts/base';
import { GetStaticPropsContext } from 'next';
import dynamic from 'next/dynamic';

const TradingView = dynamic(() => import('../../../components/trading-view'), {
  ssr: false,
});

export default function Hedera() {
  return (
    <BaseLayout title="Hedera Hashgraph">
      <>
        <TradingView />
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
