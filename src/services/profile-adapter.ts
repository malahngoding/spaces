/**
 */
import { getSession } from 'next-auth/react';
import { microService } from '@utils/service';
/**
 */
interface GetProfileDetailsRequest {
  microsToken: string;
}
interface GetProfileDetailsResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      avatar: string;
      bio: string;
      name: string;
      email: string;
      fresh: boolean;
    };
  };
}
export const getProfileDetails = async (
  req: GetProfileDetailsRequest,
): Promise<GetProfileDetailsResponse> => {
  return await microService
    .post(`getProfileDetails`, {
      headers: { Authorization: `Bearer ${req.microsToken}` },
      json: {},
    })
    .json();
};
/**
 */
interface UpdateProfileDetailsRequest {
  name: string;
  userName: string;
  avatar: string;
  bio: string;
  email: string;
}
interface UpdateProfileDetailsResponse {
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
}
export const updateProfileDetails = async (
  req: UpdateProfileDetailsRequest,
): Promise<UpdateProfileDetailsResponse> => {
  const session = await getSession();
  return await microService
    .post(`updateProfileDetails`, {
      headers: { Authorization: `Bearer ${session?.microsToken}` },
      json: {
        name: req.name,
        email: req.email,
        userName: req.userName,
        avatar: req.avatar,
        bio: req.bio,
      },
    })
    .json();
};
/**
 */
// interface GetProfileWalletsRequest {}
interface GetProfileWalletsReponse {
  data: {
    messages: string;
    status: string;
    payload: {
      wallets: string[];
    };
  };
}
export const getProfileWallets =
  async (): Promise<GetProfileWalletsReponse> => {
    const session = await getSession();
    return await microService
      .get(`getProfileWallets`, {
        headers: { Authorization: `Bearer ${session?.microsToken}` },
      })
      .json();
  };
