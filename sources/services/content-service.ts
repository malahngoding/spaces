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

interface GetArticlesRequest {
  offset: number;
  limit: number;
  lang: string;
}
interface GetArticlesResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      articles: Articles[];
      next: string;
    };
  };
}

export const getArticles = async (
  req: GetArticlesRequest,
): Promise<GetArticlesResponse> => {
  return await microService.get(
    `/getContents/articles?offset=${req.offset}&limit=${req.limit}&lang=${req.lang}`,
    {},
  );
};

interface GetSnippetsRequest {
  offset: number;
  limit: number;
  lang: string;
}

interface GetSnippetsResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      snippets: Snippets[];
      next: string;
    };
  };
}

export const getSnippets = async (
  req: GetSnippetsRequest,
): Promise<GetSnippetsResponse> => {
  return await microService.get(
    `/getContents/snippets?offset=${req.offset}&limit=${req.limit}&lang=${req.lang}`,
    {},
  );
};

interface GetArticlesPathRequest {
  offset: number;
  limit: number;
  lang: string;
}
interface GetArticlesPathResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      path: string[];
      next: string;
    };
  };
}

export const getArticlesPath = async (
  req: GetArticlesPathRequest,
): Promise<GetArticlesPathResponse> => {
  return await microService.get(
    `/getContentsPath/articles?offset=${req.offset}&limit=${req.limit}&lang=${req.lang}`,
    {},
  );
};

interface GetSnippetsPathRequest {
  offset: number;
  limit: number;
  lang: string;
}
interface GetSnippetsPathResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      path: string[];
      next: string;
    };
  };
}

export const getSnippetsPath = async (
  req: GetSnippetsPathRequest,
): Promise<GetSnippetsPathResponse> => {
  return await microService.get(
    `/getContentsPath/snippets?offset=${req.offset}&limit=${req.limit}&lang=${req.lang}`,
    {},
  );
};
