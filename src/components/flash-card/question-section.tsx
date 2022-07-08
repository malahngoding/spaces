/* 3rd Party Modules Import */
import { useState } from 'react';
import { useRouter } from 'next/router';
/* Internal Modules Import */
import { Box } from '@components/design/box';
import { Button } from '@components/design/button';
import { useFlashCard } from '@store/flash-card-store';
import { CountdownTicker } from '@components/flash-card/countdown';
/* Types Import */
import type { QuestionGroup } from '@components/flash-card/types';
/**
 * Props Declaration
 * @private
 */
interface QuestionsSectionProps {
  question: QuestionGroup;
  hash: string;
}
/**
 * Component Declaration
 * @public
 */
export const QuestionSection = (props: QuestionsSectionProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const router = useRouter();

  const questionLength = props.question.QuestionDetail.length;

  const activeQuestion = useFlashCard((state) => state.activeQuestion);

  const nextQuestion = useFlashCard((state) => state.nextQuestion);
  const answeringCorrect = useFlashCard((state) => state.answeringCorrect);
  const timePunch = useFlashCard((state) => state.timePunch);

  const handleAnswerClick = (isCorrect: boolean): void => {
    setTimeLeft(60);
    if (activeQuestion < questionLength - 1) {
      timePunch(timeLeft);
      if (isCorrect) {
        answeringCorrect();
      }
      nextQuestion();
    } else {
      timePunch(timeLeft);
      if (isCorrect) {
        answeringCorrect();
      }
      router.push(`/camps/flash-card/${props.hash}/finished`);
    }
  };

  return (
    <>
      <Box
        css={{
          display: `grid`,
          gridTemplateColumns: `2fr 1fr`,
          marginBottom: `$md`,
        }}
      >
        <Box>
          <Box css={{ paddingBottom: `$xs`, fontWeight: `bold` }}>
            The Question
          </Box>
          <Box>
            {props.question.QuestionDetail[activeQuestion].questionString}
          </Box>
        </Box>
        <Box>
          <Box css={{ paddingBottom: `$xs`, fontWeight: `bold` }}>
            The Information
          </Box>
          <Box>
            {activeQuestion + 1}/{questionLength}
          </Box>
        </Box>
      </Box>
      <Box
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gap: `$xs`,
        }}
      >
        {props.question.QuestionDetail[activeQuestion].QuestionAnswer.map(
          (item) => {
            return (
              <Button
                key={item.order}
                onClick={() => handleAnswerClick(item.isCorrect)}
              >
                {item.answerString}
              </Button>
            );
          },
        )}
      </Box>
      <Box>
        <CountdownTicker timeLeft={timeLeft} setTimeLeft={setTimeLeft} />
      </Box>
    </>
  );
};
/**
 * Internal Component Declaration
 * @private
 */
