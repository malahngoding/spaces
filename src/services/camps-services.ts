import { microService } from '@utils/service';

export const getCampsList = async (
  lang?: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      language: string;
      courses: string;
      slug: string;
    };
  };
}> => {
  if (lang) {
    lang = 'id';
  }
  return await microService.get(`getCampsList?lang=${lang}`, {});
};
