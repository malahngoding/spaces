import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface SnippetsPostProps {}

export default function SnippetsPost(props: SnippetsPostProps) {
  const t = useTranslations(`Snippets`);

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)} POST
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: '1' } },
      { params: { slug: '2' } },
      { params: { slug: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
