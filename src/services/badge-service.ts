import { getSession } from 'next-auth/react';

import { microService } from '@utils/service';

// interface GetBadgeList {}

interface GetBadgeListResponse {
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

export const getBadgeList = async (): Promise<GetBadgeListResponse> => {
  const session = await getSession();
  return await microService.get(`getBadgeList`, {
    headers: { Authorization: `Bearer ${session?.microsToken}` },
  });
};
