import { useTranslations } from 'next-intl';
import { UilAngleLeft } from '@iconscout/react-unicons';
import Link from 'next/link';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { SnippetCard, SnippetCardProps } from '@components/cards/snippet-card';
import { getSnippets } from '@services/content-service';
import { Button } from '@components/design/button';

import type { GetStaticPropsContext } from 'next';

interface SnippetsProps {
  data: SnippetCardProps[];
}

export default function Snippets(props: SnippetsProps) {
  const t = useTranslations(`Snippets`);
  const l = useTranslations(`Learn`);

  return (
    <BaseLayout title={t(`snippetsTitle`)}>
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)}
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
        <Section
          css={{
            display: `grid`,
            gridTemplateColumns: `1fr`,
            gap: `$xs`,
            '@lg': { gridTemplateColumns: `1fr 1fr` },
            '@xl': { gridTemplateColumns: `1fr 1fr 1fr` },
          }}
        >
          {props.data.map((item) => {
            return (
              <SnippetCard
                key={item.slug}
                tags={item.tags}
                icon={item.icon}
                title={item.title}
                slug={item.slug}
              />
            );
          })}
        </Section>
        <Section
          css={{
            display: `flex`,
            flexDirection: `row`,
            justifyContent: `space-between`,
            alignItems: `center`,
          }}
        >
          <Link href="/learn" passHref>
            <Button alternative={'tertiary'}>
              <UilAngleLeft size="32" />
            </Button>
          </Link>
          <Link href="/learn/articles" passHref>
            <Button alternative={'tertiary'}>{l(`articlesTitle`)}</Button>
          </Link>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  const response = await getSnippets({
    offset: 10,
    limit: 10,
    lang: locale || 'id',
  });

  return {
    props: {
      messages,
      data: response.data.payload.snippets,
    },
  };
}
