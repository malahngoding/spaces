import { useState } from 'react';
import { useRouter } from 'next/router';

import { Box } from '@components/design/box';
import { Button } from '@components/design/button';
import { useFlashCard } from '@store/flash-card-store';

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
  const questionLength = props.question.QuestionDetail.length;

  const activeQuestion = useFlashCard((state) => state.activeQuestion);

  const nextQuestion = useFlashCard((state) => state.nextQuestion);
  const answeringCorrect = useFlashCard((state) => state.answeringCorrect);
  const timePunch = useFlashCard((state) => state.timePunch);

  const handleAnswerClick = (isCorrect: boolean): void => {
    if (activeQuestion < questionLength - 1) {
      timePunch(1);
      if (isCorrect) {
        answeringCorrect();
      }
      nextQuestion();
    } else {
      timePunch(1);
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
    </>
  );
};
