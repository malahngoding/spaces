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
import { BlogCard, BlogCardProps } from '@components/cards/blog-card';
interface ArticlesProps {
  data: BlogCardProps[];
}

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);

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
          {props.data.map((item) => {
            return (
              <BlogCard
                key={item.id}
                id={item.id}
                image={item.image}
                decription={item.decription}
                published={item.published}
                title={item.title}
              />
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
      data: [
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
      ],
    },
  };
}
