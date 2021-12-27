import CryptoJs from 'crypto-js';
import { getSession } from 'next-auth/react';

import { service } from '@utils/service';

export const getBadgeList = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}> => {
  const session = await getSession();
  return await service.get(`getBadgeList`, {
    headers: { Authorization: `Bearer ${session?.insteadToken}` },
  });
};
