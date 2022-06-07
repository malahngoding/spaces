import { GetStaticPropsContext, GetStaticPaths } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter, { test } from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { UilAngleLeft } from '@iconscout/react-unicons';
import dynamic from 'next/dynamic';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown, MarkdownWrapper } from '@components/markdown';
import { getArticlesPath } from '@services/content-service';
import { Button } from '@components/design/button';

interface ArticlesProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    published: string;
    slug: string;
  };
}

const JoinUs = dynamic(
  (): any => import(`@components/join-us`).then((mod) => mod.JoinUs),
  { ssr: false },
);

export default function Articles(props: ArticlesProps) {
  const t = useTranslations(`Articles`);

  return (
    <BaseLayout title={props.frontMatter.title}>
      <>
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
              {t(`updated`)} {props.frontMatter.published}
            </Caption>
          </Section>
          <Section>
            <Link href="/learn/articles" passHref>
              <Button alternative={'ghost'}>
                <UilAngleLeft size="32" />
                {t(`backTo`)}
              </Button>
            </Link>
          </Section>
        </Box>
        <JoinUs />
      </>
    </BaseLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let paths: { params: { slug: string }; locale: string }[] = [];

  const response = await getArticlesPath(10, 10, 'id');
  const response2 = await getArticlesPath(10, 10, 'en');

  response.data.payload.path.map((item) => {
    paths.push({ params: { slug: item }, locale: 'id' });
  });
  response2.data.payload.path.map((item) => {
    paths.push({ params: { slug: item }, locale: 'en' });
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
      mdxOptions: {
        //@ts-ignore
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypePrism],
      },
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
