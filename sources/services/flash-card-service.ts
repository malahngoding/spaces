import { microService } from '@utils/service';

// interface GetFlashCardRankingRequest {}

interface GetFlashCardRankingResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      rankings: {
        user: {
          userName: string;
          Profile: {
            avatar: string;
          };
        };
        currentPoint: number;
      }[];
    };
  };
}

export const getFlashCardRanking =
  async (): Promise<GetFlashCardRankingResponse> => {
    return await microService.get(`getFlashCardRanking`, {});
  };

interface GetCurrentUserFlashCardStatusRequest {
  microsToken: string;
}

interface GetCurrentUserFlashCardStatusResponse {
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
        currentGroupName: string;
        currentHash: string;
      };
    };
  };
}

export const getCurrentUserFlashCardStatus = async (
  req: GetCurrentUserFlashCardStatusRequest,
): Promise<GetCurrentUserFlashCardStatusResponse> => {
  return await microService.post(
    `getCurrentUserFlashCardStatus`,
    {},
    {
      headers: { Authorization: `Bearer ${req.microsToken}` },
    },
  );
};

interface GetCurrentFlashCardBlockRequest {
  microsToken: string;
  hash: string;
}
interface GetCurrentFlashCardBlockResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      groupName: string;
      questions: any[];
    };
  };
}

export const getCurrentFlashCardBlock = async (
  req: GetCurrentFlashCardBlockRequest,
): Promise<GetCurrentFlashCardBlockResponse> => {
  return await microService.post(
    `getCurrentFlashCardBlock`,
    { hash: req.hash },
    {
      headers: { Authorization: `Bearer ${req.microsToken}` },
    },
  );
};
