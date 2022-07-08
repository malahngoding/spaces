import { useTranslations } from 'next-intl';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Caption,
  Heading,
  Paragraph,
  SubTitle,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown, MarkdownWrapper } from '@components/markdown';
import { getAnsweredCommentByLang } from '@services/comment-service';

import type { GetServerSidePropsContext } from 'next';

interface HelpAndFaqsProps {
  comments: {
    key: string;
    comment: string;
    answer: string;
    isAnswered: boolean;
    lang: string;
  }[];
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    publishedAt: string;
  };
  date: any;
}

const AskDQuestionsLazy = dynamic(
  (): any =>
    import('@components/forms/ask-d-questions').then(
      (module) => module.AskDQuestions,
    ),
  {
    ssr: false,
  },
);

export default function HelpAndFaqs(props: HelpAndFaqsProps) {
  const t = useTranslations(`Articles`);

  return (
    <BaseLayout title={props.frontMatter.title}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="help-and-faqs-text">
            {props.frontMatter.subTitle}
          </SubTitle>
          <Heading>{props.frontMatter.title}</Heading>
        </Section>
        <Section>
          <MarkdownWrapper>
            <MDXRemote {...props.source} components={Markdown} />
          </MarkdownWrapper>
        </Section>
        <br />
        <Section>
          {props.comments.map((item) => {
            return (
              <Box key={item.key}>
                <SubTitle>{item.comment}</SubTitle>
                <Paragraph>{item.answer}</Paragraph>
              </Box>
            );
          })}
        </Section>
        <Section>
          <AskDQuestionsLazy />
        </Section>
        <Section>
          <Caption>
            {t(`updated`)} {props.date}
          </Caption>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MICROS_URL}/public/static/${locale}/help-and-faqs.md`,
    );

    const source = await response.text();
    const { content, data } = matter(source);
    const mdxSource = await serialize(content);

    const messages = await import(`../lang/${locale}.json`).then(
      (module) => module.default,
    );

    const comments = await getAnsweredCommentByLang({ lang: locale || `id` });

    return {
      props: {
        messages,
        source: mdxSource,
        frontMatter: data,
        comments: comments.data.payload.comments,
        date: new Date().toUTCString(),
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
