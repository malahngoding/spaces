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

export default function Custom404() {
  const t = useTranslations(`Error`);

  return (
    <BaseLayout title={t(`404Title`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="about-us-text">{t(`404Title`)}</SubTitle>
          <Heading>{t(`404SubTitle`)}</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
