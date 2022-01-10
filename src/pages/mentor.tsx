import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Caption, Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown, MarkdownWrapper } from '@components/markdown';

interface MentorProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    publishedAt: string;
  };
}

export default function Mentor(props: MentorProps) {
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

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MICROS_URL}/public/static/${locale}/coding-tutor.md`,
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
}