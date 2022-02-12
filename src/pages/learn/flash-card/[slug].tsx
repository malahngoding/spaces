import { GetServerSidePropsContext } from 'next';
import { useTranslations } from 'next-intl';
import { getSession } from 'next-auth/react';

import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { Heading, SubTitle } from '@components/design/typography';
import { QuizLayout } from '@layouts/quiz';
import { getCurrentFlashCardBlock } from '@services/flash-card-service';

interface FlashCardPostProps {
  questionGroupName: string;
  questions: any[];
}

export default function FlashCardPost(props: FlashCardPostProps) {
  const t = useTranslations(`Snippets`);

  return (
    <QuizLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text">
            {props.questionGroupName}
          </SubTitle>
        </Section>
      </Box>
    </QuizLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const messages = await import(`../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  const session = await getSession(context);
  const hash = context?.params?.slug as string;
  if (session) {
    const flashCardBlockResponse = await getCurrentFlashCardBlock(
      session.insteadToken,
      hash,
    );
    return {
      props: {
        messages,
        questionGroupName: flashCardBlockResponse.data.payload.groupName,
        questions: flashCardBlockResponse.data.payload.questions,
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
