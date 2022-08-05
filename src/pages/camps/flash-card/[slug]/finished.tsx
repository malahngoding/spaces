import { useTranslations } from 'next-intl';
import { getSession } from 'next-auth/react';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { QuizLayout } from '@layouts/quiz';
import { useFlashCard } from '@store/flash-card-store';

import type { GetServerSidePropsContext } from 'next';

interface FlashCardPostProps {
  hash: string;
}

export default function FlashCardPost(props: FlashCardPostProps) {
  const t = useTranslations(`Snippets`);

  const correctAnswer = useFlashCard((state) => state.correctAnswer);
  const counter = useFlashCard((state) => state.counter);

  return (
    <QuizLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text" css={{ wordWrap: `break-word` }}>
            {props.hash}
          </SubTitle>
        </Section>
        <Section>
          <h1>Finished</h1>
          CORRECT ANSWER : {correctAnswer}
          {counter.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </Section>
      </Box>
    </QuizLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const messages = await import(`../../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  const session = await getSession(context);
  const hash = context?.params?.slug as string;
  if (session) {
    return {
      props: {
        messages,
        hash,
      },
    };
  } else {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
}
