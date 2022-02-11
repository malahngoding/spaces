import { microService } from '@utils/service';
import { getSession } from 'next-auth/react';

export const getFlashCardRanking = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      ranks: {
        rank: number;
        userName: string;
        avatar: string;
        score: string;
      }[];
    };
  };
}> => {
  return await microService.get(`getFlashCardRanking`, {});
};

export const getCurrentUserFlashCardStatus = async (
  insteadToken: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      stats: {
        finishedGroupQuestion: number;
        answeredQuestion: number;
        skippedQuestion: number;
        correctAnswer: number;
        wrongAnswer: number;
        accuracy: number;
      };
    };
  };
}> => {
  return await microService.post(
    `getCurrentUserFlashCardStatus`,
    {},
    {
      headers: { Authorization: `Bearer ${insteadToken}` },
    },
  );
};
