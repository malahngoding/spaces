import { useGLTF } from '@react-three/drei';

import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

export default function Three() {
  return (
    <BaseLayout title="ThreeJS">
      <h1>asd</h1>
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
