import { microService } from '@utils/service';

type Articles = {
  id: number;
  image: string;
  published: string;
  title: string;
  decription: string;
  slug: string;
};

type Snippets = {
  id: number;
  title: string;
  icon: 'javascript' | 'golang' | 'css' | 'solidity' | string;
  tags: string[];
  slug: string;
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
    `/getContents/articles?offset=${offset}&limit=${limit}&lang=${lang}`,
    {},
  );
};

export const getSnippets = async (
  offset: number,
  limit: number,
  lang: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      snippets: Snippets[];
      next: string;
    };
  };
}> => {
  return await microService.get(
    `/getContents/snippets?offset=${offset}&limit=${limit}&lang=${lang}`,
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
      path: string[];
      next: string;
    };
  };
}> => {
  return await microService.get(
    `/getContentsPath/articles?offset=${offset}&limit=${limit}&lang=${lang}`,
    {},
  );
};

export const getSnippetsPath = async (
  offset: number,
  limit: number,
  lang: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      path: string[];
      next: string;
    };
  };
}> => {
  return await microService.get(
    `/getContentsPath/snippets?offset=${offset}&limit=${limit}&lang=${lang}`,
    {},
  );
};
