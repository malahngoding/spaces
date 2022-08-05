import { getSession } from 'next-auth/react';

import { microService } from '@utils/service';

// interface GetCurrentUserRequest {}

interface GetCurrentUserResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      userName: string;
    };
  };
}

export const getCurrentUser = async (): Promise<GetCurrentUserResponse> => {
  const session = await getSession();
  return await microService.get(`getCurrentUser`, {
    headers: { Authorization: `Bearer ${session?.microsToken}` },
  });
};

interface CheckUserNameRequest {
  userName: string;
}

interface CheckUserNameResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      available: boolean;
    };
  };
}

export const checkUserName = async (
  req: CheckUserNameRequest,
): Promise<CheckUserNameResponse> => {
  const session = await getSession();
  return await microService.post(
    `checkUserName`,
    { newUserName: req.userName },
    {
      headers: { Authorization: `Bearer ${session?.microsToken}` },
    },
  );
};
