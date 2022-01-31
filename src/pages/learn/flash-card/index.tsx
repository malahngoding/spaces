import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import useSWR from 'swr';

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
import { getFlashCardRanking } from '@services/flash-card-service';
import { Button } from '@components/design/button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogAction,
} from '@components/design/alert';

interface FlashCardProps {
  currentSession: any;
}

const fetcher = (url: string) => getFlashCardRanking();

export default function FlashCard(props: FlashCardProps) {
  const { data, error } = useSWR('/api/user', fetcher);
  const rankList = data?.data.payload.ranks;

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
                <Title>{t(`yourStatistics`, { point: `125pts` })}</Title>
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
                  <LocalBox value="1" point={t(`finishedGroupQuestion`)} />
                  <LocalBox value="2" point={t(`answeredQuestion`)} />
                  <LocalBox value="3" point={t(`skippedQuestion`)} />
                  <LocalBox value="4" point={t(`correctAnswer`)} />
                  <LocalBox value="5" point={t(`wrongAnswer`)} />
                  <LocalBox value="6%" point={t(`accuracy`)} />
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
                <Image width={320} height={320} src={cardImage} alt="Le card" />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Mulai</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                    <Box css={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <AlertDialogCancel asChild>
                        <Button
                          alternative="secondary"
                          css={{ marginRight: 25 }}
                        >
                          Reject
                        </Button>
                      </AlertDialogCancel>
                      <AlertDialogAction asChild>
                        <Button type="submit">Accept</Button>
                      </AlertDialogAction>
                    </Box>
                  </AlertDialogContent>
                </AlertDialog>
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
  return {
    props: {
      messages,
      currentSession: session,
    },
  };
}
