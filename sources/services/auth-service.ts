import CryptoJs from 'crypto-js';

import { filamentService, microService } from '@utils/service';

interface IssueMicrosTokenRequest {
  identification: string;
  provider: string;
  name: string;
  email: string;
}

interface IssueMicrosTokenResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}

export const issueMicrosToken = async (
  req: IssueMicrosTokenRequest,
): Promise<IssueMicrosTokenResponse> => {
  const ciphertext = CryptoJs.AES.encrypt(
    req.identification,
    process.env.INSTEAD_TOKEN || ``,
  ).toString();
  return await microService.post(
    `issueToken`,
    {
      identification: ciphertext,
      provider: req.provider,
      name: req.name,
      email: req.email,
    },
    {
      headers: { Authorization: `instead_${process.env.INSTEAD_TOKEN}` },
    },
  );
};

interface IssueFilamentsTokenRequest {
  identification: string;
  provider: string;
}

interface IssueFilamentsTokenResponse {
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}

export const issueFilamentsToken = async (
  req: IssueFilamentsTokenRequest,
): Promise<IssueFilamentsTokenResponse> => {
  return await filamentService.post(
    `api/handshake`,
    {
      identification: req.identification,
      provider: req.provider,
    },
    {
      headers: { Authorization: `Bearer instead_${process.env.INSTEAD_TOKEN}` },
    },
  );
};
