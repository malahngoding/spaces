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

export const getCurrentUserFlashCardStatus = async (): Promise<{
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
  return await microService.get(`getCurrentUserFlashCardStatus`, {});
};
