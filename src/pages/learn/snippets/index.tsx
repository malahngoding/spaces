import { GetStaticPropsContext } from 'next';
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

interface SnippetsProps {
  data: SnippetCardProps[];
}

export default function Snippets(props: SnippetsProps) {
  const t = useTranslations(`Snippets`);
  const l = useTranslations(`Learn`);

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`snippetsSubTitle`)}
          </SubTitle>
          <Heading>{t(`snippetsTitle`)}</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {props.data.map((item) => {
            return (
              <SnippetCard
                key={item.id}
                tags={item.tags}
                id={item.id}
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
  const response = await getSnippets(10, 10, locale || 'id');

  return {
    props: {
      messages,
      data: response.data.payload.snippets,
    },
  };
}
