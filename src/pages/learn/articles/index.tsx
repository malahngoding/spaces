import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { BlogCard, BlogCardProps } from '@components/cards/blog-card';
import { getArticles } from '@services/content-service';
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
                description={item.description}
                published={item.published}
                title={item.title}
                slug={item.slug}
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
  const response = await getArticles(10, 10, locale || 'id');
  return {
    props: {
      messages,
      data: response.data.payload.articles,
    },
  };
}
