import { getSession } from 'next-auth/react';

import { filamentService } from '@utils/service';

interface GetAnsweredCommentByLangRequest {
  lang: string;
}

interface GetAnsweredCommentByLangResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      comments: {
        key: string;
        comment: string;
        answer: string;
        isAnswered: boolean;
        lang: string;
      }[];
    };
  };
}

export const getAnsweredCommentByLang = async (
  req: GetAnsweredCommentByLangRequest,
): Promise<GetAnsweredCommentByLangResponse> => {
  return await filamentService.get(`/api/comments?lang=${req.lang}`, {
    headers: { Authorization: `Bearer instead_${process.env.INSTEAD_TOKEN}` },
  });
};

interface PostCommentRequest {
  message: string;
  lang: string;
}

interface PostCommentResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      list: {
        badge: {
          title: string;
          descriptionEn: string;
          descriptionId: string;
          media: string;
          type: `MOVING` | `STILL`;
        };
      }[];
    };
  };
}

export const postComment = async (
  req: PostCommentRequest,
): Promise<PostCommentResponse> => {
  const session = await getSession();
  return await filamentService.post(
    `/api/comments/add`,
    {
      message: req.message,
      lang: req.lang,
    },
    {
      headers: { Authorization: `Bearer instead_${session?.filamentsToken}` },
    },
  );
};
