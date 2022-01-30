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
