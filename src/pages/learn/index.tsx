import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { BadgeCard } from '@components/cards/badge-card';
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubHeading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { keyframes } from '@config/stitches.config';
import { getArticles, getSnippets } from '@services/content-service';
import { BlogCard, BlogCardProps } from '@components/cards/blog-card';

import type { GetStaticPropsContext } from 'next';
import type { SnippetCardProps } from '@components/cards/snippet-card';

interface LearnProps {
  articles: BlogCardProps[];
  snippets: SnippetCardProps[];
}

const scaleUp = keyframes({
  '0%': { transform: 'translateY(0px)', background: `none` },
  '100%': { transform: 'translateY(-4px)', background: `$slate4` },
});

export default function Learn(props: LearnProps) {
  const t = useTranslations(`Learn`);

  const router = useRouter();

  const buffMenu: {
    id: number;
    title: string;
    description: string;
    media: string;
    url: string;
  }[] = [
    {
      id: 1,
      title: `${t(`articlesTitle`)}`,
      description: `${t(`articlesDescription`)}`,
      media: `/static/images/articles.png`,
      url: `/learn/articles`,
    },
    {
      id: 2,
      title: `${t(`snippetsTitle`)}`,
      description: `${t(`snippetsDescription`)}`,
      media: `/static/images/snippets.png`,
      url: `/learn/snippets`,
    },
  ];

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">{t(`learnSubTitle`)}</SubTitle>
          <Heading>{t(`learnTitle`)}</Heading>
        </Section>
        <br />
        <Section>
          <SubHeading css={{ fontSize: `$md` }}>{t(`latest`)}</SubHeading>
        </Section>
        <Section
          css={{
            display: `grid`,
            gap: `$xs`,
            '@md': {
              gridTemplateColumns: `1fr 1fr`,
            },
          }}
        >
          {props.articles.map((item) => {
            return (
              <BlogCard
                key={item.id}
                id={item.id}
                image={item.image}
                description={item.description}
                published={item.published}
                title={item.title}
                slug={item.slug}
              />
            );
          })}
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {buffMenu.map((item) => {
            return (
              <Box
                as="a"
                key={item.id}
                css={{
                  marginTop: `$md`,
                  marginRight: `$md`,
                  transform: 'translateY(0px)',
                  '&:hover': {
                    cursor: `pointer`,
                    animation: `${scaleUp} 200ms`,
                    transform: 'translateY(-4px)',
                    backgroundColor: `$slate4`,
                    boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
                  },
                }}
                onClick={() => router.push(item.url)}
              >
                <BadgeCard
                  description={item.description}
                  media={item.media}
                  title={item.title}
                />
              </Box>
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  // TODO: Try Catch
  const articleResults = await getArticles(0, 3, locale || 'id');
  const snippetResults = await getSnippets(0, 3, locale || 'id');

  return {
    props: {
      messages,
      articles: articleResults.data.payload.articles,
      snippets: snippetResults.data.payload.snippets,
    },
  };
}
