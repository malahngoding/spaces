import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DynamicComponent = dynamic(() => import('../../../components/api-call'), {
  ssr: false,
  suspense: true,
});

export default function ApiCall() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <DynamicComponent />
    </Suspense>
  );
}
