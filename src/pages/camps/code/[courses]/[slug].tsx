/** 3rd Party Modules Import */
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { CampsLayout } from '@layouts/camps';
import { Markdown, MarkdownWrapper } from '@components/markdown';
import { Progress, ProgressIndicator } from '@components/design/progress';
/** Types Import */
import type { GetServerSidePropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface CodeProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    published: string;
    slug: string;
    next: string;
    previous: string;
  };
}

const CodeNavigation = (props: { progress: number }): JSX.Element => {
  return (
    <>
      <Box css={{ padding: `$xs` }}>
        <SubTitle>Introduction To Programming</SubTitle>
        <SubTitle css={{ fontSize: `$xs`, marginBottom: `8px` }}>
          Course Progress {props.progress}%
        </SubTitle>
        <Progress value={props.progress}>
          <ProgressIndicator style={{ width: `${props.progress}%` }} />
        </Progress>
      </Box>
      <Box css={{ padding: `$md`, borderTop: `1px solid $slate6` }}></Box>
    </>
  );
};

export default function Code(props: CodeProps) {
  return (
    <CampsLayout
      title={props.frontMatter.title}
      sideNav={<CodeNavigation progress={25} />}
    >
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
        </Box>
      </>
    </CampsLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getServerSideProps({
  params,
  locale,
}: GetServerSidePropsContext) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MICROS_URL}/public/camps/${locale}/${params?.courses}/${params?.slug}.mdx`,
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

  const messages = await import(`../../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      source: mdxSource,
      frontMatter: data,
    },
  };
}
