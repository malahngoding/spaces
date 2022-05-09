import { getSession } from 'next-auth/react';

import { microService } from '@utils/service';

export const getCurrentUser = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      userName: string;
    };
  };
}> => {
  const session = await getSession();
  return await microService.get(`getCurrentUser`, {
    headers: { Authorization: `Bearer ${session?.microsToken}` },
  });
};
