import { GetStaticPropsContext } from 'next';

import { Hero } from '@components/branding/hero';
import { Box } from '@components/design/box';
import { BaseLayout } from '@layouts/base';

interface HomeProps {
  random: number;
}

export default function Home(props: HomeProps) {
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Hero random={props.random} />
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      random: getRandomInt(0, 2),
    },
  };
}
