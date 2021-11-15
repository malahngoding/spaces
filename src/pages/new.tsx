import { GetStaticPropsContext } from 'next';

export default function New() {
  const message = `OKE`;
  return (
    <div>
      <h1>{message}</h1>
    </div>
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
