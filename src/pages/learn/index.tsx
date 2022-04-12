import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import { BadgeCard } from '@components/cards/badge-card';
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

import type { GetStaticPropsContext } from 'next';

interface LearnProps {}

export default function Learn(props: LearnProps) {
  const t = useTranslations(`Learn`);

  const router = useRouter();

  const buffMenu: {
    id: number;
    title: string;
    description: string;
    media: string;
    url: string;
  }[] = [
    {
      id: 1,
      title: `${t(`articlesTitle`)}`,
      description: `${t(`articlesDescription`)}`,
      media: `/static/images/articles.png`,
      url: `/learn/articles`,
    },
    {
      id: 2,
      title: `${t(`snippetsTitle`)}`,
      description: `${t(`snippetsDescription`)}`,
      media: `/static/images/snippets.png`,
      url: `/learn/snippets`,
    },
  ];

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">{t(`learnSubTitle`)}</SubTitle>
          <Heading>{t(`learnTitle`)}</Heading>
        </Section>
        <Section
          css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
        >
          {buffMenu.map((item) => {
            return (
              <Box
                as="a"
                key={item.id}
                css={{
                  marginTop: `$md`,
                  marginRight: `$md`,
                  '&:hover': {
                    cursor: `pointer`,
                    transform: `translateY(-4px)`,
                    boxShadow: `0px 8px 6px -8px hsl(198 6.6% 15.8%)`,
                  },
                }}
                onClick={() => router.push(item.url)}
              >
                <BadgeCard
                  description={item.description}
                  media={item.media}
                  title={item.title}
                />
              </Box>
            );
          })}
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = await import(`../../lang/${locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
    },
  };
}
