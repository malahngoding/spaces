import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { UilAngleLeft } from '@iconscout/react-unicons';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { getSnippetsPath } from '@services/content-service';
import { Markdown, MarkdownWrapper } from '@components/markdown';
import { Button } from '@components/design/button';

import type { GetStaticPropsContext, GetStaticPaths } from 'next';

interface SnippetsPostProps {
  source: any;
  frontMatter: {
    title: string;
    icon: string;
    tags: string[];
    slug: string;
  };
}

export default function SnippetsPost(props: SnippetsPostProps) {
  const t = useTranslations(`Snippets`);

  return (
    <BaseLayout title={props.frontMatter.title}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">
            {props.frontMatter.title}
          </SubTitle>
        </Section>
        <Section>
          <MarkdownWrapper>
            <MDXRemote {...props.source} components={Markdown} />
          </MarkdownWrapper>
        </Section>
        <Section css={{ marginX: `0px` }}>
          <Link href="/learn/snippets" passHref>
            <Button as="button" alternative={'ghost'}>
              <UilAngleLeft size="32" />
              {t(`backTo`)}
            </Button>
          </Link>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  let paths: { params: { slug: string }; locale: string }[] = [];

  const response = await getSnippetsPath(10, 10, 'id');
  const response2 = await getSnippetsPath(10, 10, 'en');

  response.data.payload.path.map((item) => {
    paths.push({ params: { slug: item }, locale: 'id' });
  });
  response2.data.payload.path.map((item) => {
    paths.push({ params: { slug: item }, locale: 'en' });
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export async function getStaticProps({
  locale,
  params,
}: GetStaticPropsContext) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MICROS_URL}/public/snippets/${locale}/${params?.slug}.mdx`,
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
      revalidate: 86400,
    };
  }
}
