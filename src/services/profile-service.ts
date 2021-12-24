import { service } from '@utils/service';
import { getSession } from 'next-auth/react';

export const getProfileDetails = async (): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}> => {
  const session = await getSession();
  return await service.post(
    `updateProfileDetails`,
    {},
    {
      headers: { Authorization: `Bearer ${session?.insteadToken}` },
    },
  );
};

export const updateProfileDetails = async (objkt: {
  name: string;
  avatar: string;
  bio: string;
}): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}> => {
  const session = await getSession();
  return await service.post(
    `updateProfileDetails`,
    {
      name: objkt.name,
      avatar: objkt.avatar,
      bio: objkt.bio,
    },
    {
      headers: { Authorization: `Bearer ${session?.insteadToken}` },
    },
  );
};
