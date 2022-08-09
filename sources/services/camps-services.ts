import { microService } from '@utils/service';

interface GetCampsListRequest {
  lang?: string;
}

interface GetCampsListResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      language: string;
      courses: string;
      slug: string;
    };
  };
}

export const getCampsList = async (
  req: GetCampsListRequest,
): Promise<GetCampsListResponse> => {
  if (req.lang) {
    req.lang = 'id';
  }
  return await microService.get(`getCampsList?lang=${req.lang}`, {});
};
