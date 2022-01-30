import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import useSWR from 'swr';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { getSession } from 'next-auth/react';
import { AuthenticationBlock } from '@components/authentication-block';
import { RankCard } from '@components/cards/rank-card';
import { getFlashCardRanking } from '@services/flash-card-service';

interface FlashCardProps {
  currentSession: any;
}

const fetcher = (url: string) => getFlashCardRanking();

export default function FlashCard(props: FlashCardProps) {
  const { data, error } = useSWR('/api/user', fetcher);
  const rankList = data?.data.payload.ranks;

  const t = useTranslations(`FlashCard`);
  return (
    <BaseLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">
            {t(`flashCardSubTitle`)}
          </SubTitle>
          <Heading>{t(`flashCardTitle`)}</Heading>
          <Section
            css={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `center`,
              alignItems: `centers`,
              marginBottom: 0,
            }}
          >
            <SubTitle>Ranks</SubTitle>
          </Section>
          <Box
            css={{
              marginBottom: `$xl`,
              display: `grid`,
              gridTemplateColumns: `1fr`,
              gap: `$xs`,
              '@md': { gridTemplateColumns: `1fr 1fr` },
              '@lg': { gridTemplateColumns: `1fr 1fr 1fr` },
            }}
          >
            {rankList?.map((item) => {
              return (
                <RankCard
                  key={item.rank}
                  rank={item.rank}
                  userName={item.userName}
                  avatar={item.avatar}
                  score={item.score}
                />
              );
            })}
          </Box>
          <AuthenticationBlock currentSession={props.currentSession}>
            <Section
              css={{ display: `flex`, flexDirection: `row`, flexWrap: `wrap` }}
            >
              Hello
            </Section>
          </AuthenticationBlock>
        </Section>
      </Box>
    </BaseLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const messages = await import(`../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  return {
    props: {
      messages,
      currentSession: session,
    },
  };
}
