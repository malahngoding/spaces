import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import {
  Heading,
  Paragraph,
  SubTitle,
  Title,
} from '@components/design/typography';
import { BaseLayout } from '@layouts/base';
import { getSession } from 'next-auth/react';
import { AuthenticationBlock } from '@components/authentication-block';
import { RankCard } from '@components/cards/rank-card';
import {
  getCurrentUserFlashCardStatus,
  getFlashCardRanking,
} from '@services/flash-card-service';
import { Button } from '@components/design/button';
import Link from 'next/link';

type RankList = {
  rank: number;
  userName: string;
  avatar: string;
  score: string;
};
interface FlashCardProps {
  rankList: RankList[];
  currentSession: any;
  stats: {
    finishedGroupQuestion: number;
    answeredQuestion: number;
    skippedQuestion: number;
    correctAnswer: number;
    wrongAnswer: number;
    accuracy: number;
    currentPoint: number;
    currentHash: string;
  };
}

export default function FlashCard(props: FlashCardProps) {
  const t = useTranslations(`FlashCard`);
  const cardImage = `/static/images/card.webp`;

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
            <SubTitle> {t(`currentRanks`)}</SubTitle>
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
            {props.rankList?.map((item: RankList) => {
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
            <Box
              css={{
                marginBottom: `$xl`,
                display: `grid`,
                gridTemplateColumns: `1fr`,
                gap: `$xs`,
                '@md': { gridTemplateColumns: `1fr` },
                '@lg': { gridTemplateColumns: `2fr 1fr` },
              }}
            >
              <Box
                css={{
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `flex-start`,
                  alignItems: `flex-start`,
                  border: `2px solid $slate6`,
                  padding: `$md`,
                }}
              >
                <Title>
                  {t(`yourStatistics`, { point: props.stats.currentPoint })}
                </Title>
                <SubTitle>
                  {t(`nextRound`, { groupName: 'Next Round' })}
                </SubTitle>
                <Paragraph>{t(`quotes`)}</Paragraph>
                <Box
                  css={{
                    marginY: `$md`,
                    display: `grid`,
                    gridTemplateColumns: `1fr`,
                    alignSelf: `center`,
                    gap: `$xs`,
                    '@md': { gridTemplateColumns: `1fr 1fr` },
                    '@lg': { gridTemplateColumns: `1fr 1fr 1fr` },
                  }}
                >
                  <LocalBox
                    value={props.stats.finishedGroupQuestion.toString()}
                    point={t(`finishedGroupQuestion`)}
                  />
                  <LocalBox
                    value={props.stats.answeredQuestion.toString()}
                    point={t(`answeredQuestion`)}
                  />
                  <LocalBox
                    value={props.stats.skippedQuestion.toString()}
                    point={t(`skippedQuestion`)}
                  />
                  <LocalBox
                    value={props.stats.correctAnswer.toString()}
                    point={t(`correctAnswer`)}
                  />
                  <LocalBox
                    value={props.stats.wrongAnswer.toString()}
                    point={t(`wrongAnswer`)}
                  />
                  <LocalBox
                    value={props.stats.accuracy.toString()}
                    point={t(`accuracy`)}
                  />
                </Box>
              </Box>
              <Box
                css={{
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  border: `2px solid $slate6`,
                  padding: `$xxs`,
                }}
              >
                <Image
                  width={320}
                  height={320}
                  src={cardImage}
                  alt="Le card"
                  priority
                />
                <Link
                  href={`/camps/flash-card/${props.stats.currentHash}`}
                  passHref
                >
                  <Button>Mulai</Button>
                </Link>
              </Box>
            </Box>
          </AuthenticationBlock>
        </Section>
      </Box>
    </BaseLayout>
  );
}

interface LocalBoxProps {
  point: string;
  value: string;
}

const LocalBox = (props: LocalBoxProps) => {
  return (
    <Box
      css={{
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <p>{props.point}</p>
      <Box as="p" css={{ fontWeight: `bolder` }}>
        {props.value}
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const messages = await import(`../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  const rankListResponse = await getFlashCardRanking();
  if (session) {
    const flashCardStatsResponse = await getCurrentUserFlashCardStatus(
      session.microsToken,
    );
    return {
      props: {
        rankList: rankListResponse.data.payload.ranks,
        messages,
        currentSession: session,
        stats: flashCardStatsResponse.data.payload.stats,
      },
    };
  } else {
    return {
      props: {
        rankList: rankListResponse.data.payload.ranks,
        messages,
        currentSession: session,
        stats: {
          finishedGroupQuestion: 0,
          answeredQuestion: 0,
          skippedQuestion: 0,
          correctAnswer: 0,
          wrongAnswer: 0,
          accuracy: 0,
          currentPoint: 0,
        },
      },
    };
  }
}
