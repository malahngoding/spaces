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
      avatar: objkt.avatar,
      bio: objkt.bio,
    },
    {
      headers: { Authorization: `Bearer ${session?.microsToken}` },
    },
  );
};
