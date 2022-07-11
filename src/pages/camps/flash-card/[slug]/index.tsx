/** 3rd Party Modules Import */
import { useTranslations } from 'next-intl';
import { getSession } from 'next-auth/react';
/** Internal Modules Import */
import { Box } from '@components/design/box';
import { Section } from '@components/design/section';
import { SubTitle } from '@components/design/typography';
import { QuizLayout } from '@layouts/quiz';
import { getCurrentFlashCardBlock } from '@services/flash-card-service';
import { QuestionSection } from '@components/flash-card/question-section';
/** Types Import */
import type { GetServerSidePropsContext } from 'next';

interface QuestionGroup {
  id: number;
  groupName: string;
  questionTag: string;
  QuestionDetail: QuestionDetail[];
}
interface QuestionDetail {
  questionGroupId: number;
  questionString: string;
  QuestionAnswer: QuestionAnswer[];
}
interface QuestionAnswer {
  order: number;
  answerString: string;
  isCorrect: boolean;
}
/**
 * Next Laziefied Components Import
 *
 */
/**
 * Next Page Component Declaration
 *
 */
interface FlashCardPostProps {
  hash: string;
  questionGroupName: string;
  questions: QuestionGroup;
}

export default function FlashCardPost(props: FlashCardPostProps) {
  const t = useTranslations(`Snippets`);

  return (
    <QuizLayout title="Hello World!">
      <Box>
        <br />
        <Section>
          <SubTitle data-testid="welcome-text" css={{ wordWrap: `break-word` }}>
            {props.questionGroupName}
          </SubTitle>
        </Section>
        <Section>
          <QuestionSection question={props.questions} hash={props.hash} />
        </Section>
      </Box>
    </QuizLayout>
  );
}
/**
 * Next Page Server Code Declaration
 *
 */
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const messages = await import(`../../../../lang/${context.locale}.json`).then(
    (module) => module.default,
  );
  const session = await getSession(context);
  const hash = context?.params?.slug as string;
  if (session) {
    const flashCardBlockResponse = await getCurrentFlashCardBlock({
      microsToken: session.microsToken,
      hash: hash,
    });
    return {
      props: {
        messages,
        hash,
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
