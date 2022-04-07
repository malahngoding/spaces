import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box } from '@components/design/box';
import { Button } from '@components/design/button';

export interface QuestionGroup {
  id: number;
  groupName: string;
  questionTag: string;
  QuestionDetail: QuestionDetail[];
}

export interface QuestionDetail {
  questionGroupId: number;
  questionString: string;
  QuestionAnswer: QuestionAnswer[];
}

export interface QuestionAnswer {
  order: number;
  answerString: string;
  isCorrect: boolean;
}

interface QuestionsSectionProps {
  question: QuestionGroup;
  hash: string;
}

export const QuestionSection = (props: QuestionsSectionProps): JSX.Element => {
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const questionLength = props.question.QuestionDetail.length;

  const handleAnswerClick = (isCorrect: boolean): void => {
    if (currentQuestion !== questionLength - 1) {
      if (isCorrect) {
        setCorrectAnswer(correctAnswer + 1);
      }
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // TODO: POST RESULT
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
            {props.question.QuestionDetail[currentQuestion].questionString}
          </Box>
        </Box>
        <Box>
          <Box css={{ paddingBottom: `$xs`, fontWeight: `bold` }}>
            The Information
          </Box>
          <Box>
            {currentQuestion + 1}/{questionLength}
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
        {props.question.QuestionDetail[currentQuestion].QuestionAnswer.map(
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
    </>
  );
};
