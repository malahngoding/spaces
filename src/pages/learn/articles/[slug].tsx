import { GetStaticPropsContext, GetStaticPaths } from 'next';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter, { test } from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown, MarkdownWrapper } from '@components/markdown';
import { getArticlesPath } from '@services/content-service';
import { useEffect } from 'react';

interface ArticlesProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    publishedAt: string;
  };
}

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);

  return (
    <BaseLayout title={props.frontMatter.title}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">
            {props.frontMatter.subTitle}
          </SubTitle>
          <Heading>{props.frontMatter.title}</Heading>
        </Section>

        <Section>
          <MarkdownWrapper>
            <MDXRemote {...props.source} components={Markdown} />
          </MarkdownWrapper>
        </Section>
        <Section>
          <Caption>
            {t(`updated`)} {props.frontMatter.publishedAt}
          </Caption>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let paths: { params: { slug: string } }[] = [];

  const response = await getArticlesPath(10, 10, 'id');
  response.data.payload.articlesPath.map((item) => {
    paths.push({ params: { slug: item } });
  });

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MICROS_URL}/public/articles/${locale}/${params?.slug}.mdx`,
    );

    const source = await response.text();
    const { content, data } = matter(source);
    const mdxSource = await serialize(content, {
      //@ts-ignore
      mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
    });

    const messages = await import(`../../../lang/${locale}.json`).then(
      (module) => module.default,
    );
    return {
      props: {
        messages,
        source: mdxSource,
        frontMatter: data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/auth/error?error=${error}`,
      },
    };
  }
}
