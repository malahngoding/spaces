import { useRouter } from 'next/router';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

import { BadgeCard } from '@components/cards/badge-card';
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';

interface CampsProps {}

export default function Camps(props: CampsProps) {
  const t = useTranslations(`Camps`);

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
      title: `${t(`awesomeTitle`)}`,
      description: `${t(`awesomeDescription`)}`,
      media: `static/images/hashnaut_awesome.png`,
      url: `/camps/awesome-noob`,
    },
    {
      id: 2,
      title: `${t(`codeTitle`)}`,
      description: `${t(`codeDescription`)}`,
      media: `static/images/computer_code.png`,
      url: `/camps/code`,
    },
    {
      id: 3,
      title: `${t(`labsTitle`)}`,
      description: `${t(`labsDescription`)}`,
      media: `static/images/potion_lab.png`,
      url: `/camps/labs`,
    },
  ];

  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">{t(`campsSubTitle`)}</SubTitle>
          <Heading>{t(`campsTitle`)}</Heading>
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
