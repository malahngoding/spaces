import { microService } from '@utils/service';

type Articles = {
  id: number;
  image: string;
  published: string;
  title: string;
  decription: string;
};

export const getArticles = async (
  offset: number,
  limit: number,
  lang: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      articles: Articles[];
      next: string;
    };
  };
}> => {
  return await microService.get(
    `/getArticles?offset=${offset}&limit=${limit}&lang=${lang}`,
    {},
  );
};

export const getArticlesPath = async (
  offset: number,
  limit: number,
  lang: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      articlesPath: string[];
      next: string;
    };
  };
}> => {
  return await microService.get(
    `/getArticlesPath?offset=${offset}&limit=${limit}&lang=${lang}`,
    {},
  );
};
