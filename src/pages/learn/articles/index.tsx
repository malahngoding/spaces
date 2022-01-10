import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Caption,
  Heading,
  SubTitle,
  Title,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface ArticlesProps {}

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);
  const arr = [
    {
      id: 1,
      published: `10 January 2022`,
      title: `Rust Is The Future of JavaScript Infrastructure`,
      decription: `Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?`,
    },
  ];
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`articlesSubTitle`)}
          </SubTitle>
          <Heading>{t(`articlesTitle`)}</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        ></Section>
      </Box>
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
