import { Fragment } from 'react';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { UilAngleLeft } from '@iconscout/react-unicons';
import Link from 'next/link';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { BlogCard, BlogCardProps } from '@components/cards/blog-card';
import { getArticles } from '@services/content-service';
import { Button } from '@components/design/button';

interface ArticlesProps {
  data: BlogCardProps[];
}

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);
  const l = useTranslations(`Learn`);

  return (
    <BaseLayout title={t(`articlesTitle`)}>
      <Fragment>
        <Box>
          <Section>
            <SubTitle data-testid="welcome-text">
              {t(`articlesSubTitle`)}
            </SubTitle>
            <Heading>{t(`articlesTitle`)}</Heading>
          </Section>
        </Box>
        <Section
          css={{
            display: `grid`,
            gap: `$xs`,
            '@md': {
              gridTemplateColumns: `1fr 1fr`,
            },
          }}
        >
          {props.data.map((item) => {
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
          css={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <Link href="/learn" passHref>
            <Button alternative={'tertiary'}>
              <UilAngleLeft size="32" />
            </Button>
          </Link>
          <Link href="/learn/snippets" passHref>
            <Button alternative={'tertiary'}>{l(`snippetsTitle`)}</Button>
          </Link>
        </Section>
      </Fragment>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const response = await getArticles({
    offset: 10,
    limit: 10,
    lang: locale || 'id',
  });
  return {
    props: {
      messages,
      data: response.data.payload.articles,
    },
  };
}
