import { microService } from '@utils/service';
import { getSession } from 'next-auth/react';

export const getProfileDetails = async (
  microsToken: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: any;
  };
}> => {
  return await microService.post(
    `getProfileDetails`,
    {},
    {
      headers: { Authorization: `Bearer ${microsToken}` },
    },
  );
};

export const updateProfileDetails = async (objkt: {
  name: string;
  userName: string;
  avatar: string;
  bio: string;
  email: string;
}): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      name: string;
      avatar: string;
      bio: string;
      email: string;
    };
  };
}> => {
  const session = await getSession();
  return await microService.post(
    `updateProfileDetails`,
    {
      name: objkt.name,
      email: objkt.email,
      userName: objkt.userName,
      avatar: objkt.avatar,
      bio: objkt.bio,
    },
    {
      headers: { Authorization: `Bearer ${session?.microsToken}` },
    },
  );
};

export const getProfileWallets = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      wallets: string[];
    };
  };
}> => {
  const session = await getSession();
  return await microService.get(`getProfileWallets`, {
    headers: { Authorization: `Bearer ${session?.microsToken}` },
  });
};
