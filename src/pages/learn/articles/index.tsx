import Image from 'next/image';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Heading,
  SubTitle,
  Title,
  Paragraph,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface ArticlesProps {}

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);
  const arr = [
    {
      id: 1,
      image: `https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop`,
      published: `10 January 2022`,
      title: `Rust Is The Future of JavaScript Infrastructure`,
      decription: `Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?`,
    },
    {
      id: 2,
      image: `https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop`,
      published: `11 January 2022`,
      title: `Interactive Playground`,
      decription: `In December 2021, I delivered a talk at React Conf about how we could leverage the tools we have at our disposal, such as React and MDX, to introduce more active learning experiences to our documentation and articles.`,
    },
    {
      id: 3,
      image: `https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop`,
      published: `11 January 2022`,
      title: `A like button that likes you back`,
      decription: `I'm a big fan of Josh Comeau's work. The like button on his blog is one of the most delightful UI elements I've come across. It's also a deceptively complex component`,
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
        >
          {arr.map((item) => {
            return (
              <Box
                key={item.id}
                css={{
                  border: `2px solid $slate12`,
                  background: `$slate4`,
                  marginY: `$xxs`,
                  width: `100%`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `flex-start`,
                  justifyContent: `flex-start`,
                  '@lg': {
                    flexDirection: `row`,
                  },
                }}
              >
                <Box css={{ width: `320px` }}>
                  <Image
                    src={`${item.image}&w=320&h=320&q=80`}
                    alt={item.title}
                    width="310px"
                    height="310px"
                  />
                </Box>
                <Box
                  css={{
                    width: `100%`,
                    height: 'none',
                    padding: `$sm`,
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `space-between`,
                    justifyContent: `space-between`,
                    '@lg': {
                      width: `calc(100% - 640)`,
                    },
                  }}
                >
                  <Title>{item.title}</Title>
                  <SubTitle css={{ fontWeight: `$normal` }}>
                    {item.decription}
                  </SubTitle>
                  <Paragraph css={{ fontFamily: `$mono`, marginBottom: `0` }}>
                    {item.published}
                  </Paragraph>
                </Box>
              </Box>
            );
          })}
        </Section>
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
