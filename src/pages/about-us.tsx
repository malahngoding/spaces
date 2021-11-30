import { GetStaticPropsContext } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { Markdown } from '@components/markdown';

interface AboutUsProps {
  source: any;
}

export default function AboutUs(props: AboutUsProps) {
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">Introducing</SubTitle>
          <Heading>Malah Ngoding</Heading>
        </Section>
        <Section>
          <MDXRemote {...props.source} components={Markdown} />
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const response = await fetch(
    `https://micros.vercel.app/public/contents/${locale}/test.md`,
  );

  const source = await response.text();
  const mdxSource = await serialize(source);

  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      source: mdxSource,
    },
  };
}
