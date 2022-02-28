import { microService } from '@utils/service';

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
  microsToken: string,
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
        currentPoint: number;
        currentHash: string;
      };
    };
  };
}> => {
  return await microService.post(
    `getCurrentUserFlashCardStatus`,
    {},
    {
      headers: { Authorization: `Bearer ${microsToken}` },
    },
  );
};

export const getCurrentFlashCardBlock = async (
  microsToken: string,
  hash: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      groupName: string;
      questions: any[];
    };
  };
}> => {
  return await microService.get(`getCurrentFlashCardBlock/${hash}`, {
    headers: { Authorization: `Bearer ${microsToken}` },
  });
};
