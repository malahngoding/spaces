/** 3rd Party Modules Import */
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown, MarkdownWrapper } from '@components/markdown';
/** Types Import */
import type { GetStaticPropsContext } from 'next';

/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface AboutUsProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    publishedAt: string;
  };
}

export default function AboutUs(props: AboutUsProps) {
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
          <Image
            height={120}
            width={120}
            src="https://siasky.net/DABrDsPvVk6NTkkgU4Fz3IvMLfjn9oSXC8UqaKZwQi0HZQ"
            alt="Hecterbonha"
          />
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
/**
 * Next Page Server Code Declaration
 *
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MICROS_URL}/public/static/${locale}/about-us.md`,
    );

    const source = await response.text();
    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    const messages = await import(`../lang/${locale}.json`).then(
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
