import { getSession } from 'next-auth/react';

import { filamentService } from '@utils/service';

export const getAnsweredCommentByLang = async (
  lang: string,
): Promise<{
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
}> => {
  return await filamentService.get(`/api/comments?lang=${lang}`, {
    headers: { Authorization: `Bearer instead_${process.env.INSTEAD_TOKEN}` },
  });
};

export const postComment = async (
  message: string,
  lang: string,
): Promise<{
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
}> => {
  const session = await getSession();
  return await filamentService.post(`/api/comments/add`, {
    headers: { Authorization: `Bearer ${session?.microsToken}` },
  });
};
