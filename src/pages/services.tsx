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
import { ServiceCard } from '@components/cards/service-card';

interface ServiceProps {
  source: any;
  frontMatter: {
    title: string;
    subTitle: string;
    description: string;
    publishedAt: string;
  };
}

export default function Service(props: ServiceProps) {
  const t = useTranslations(`Articles`);
  const x = useTranslations(`Menu`);
  const v = useTranslations(`Service`);

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
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          <ServiceCard
            url="/mentor"
            title={x(`mentor`)}
            description={v(`mentor`)}
            image="https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=100"
          />
          <ServiceCard
            url="/software-consulting"
            title={x(`development`)}
            description={v(`development`)}
            image="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=100"
          />
          <ServiceCard
            url="/workshop"
            title={x(`workshop`)}
            description={v(`workshop`)}
            image="https://images.unsplash.com/photo-1543946602-a0fce8117697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=100"
          />
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
    `${process.env.NEXT_PUBLIC_MICROS_URL}/public/static/${locale}/services.md`,
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
