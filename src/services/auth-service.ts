import CryptoJs from 'crypto-js';

import { filamentService, microService } from '@utils/service';

export const issueMicrosToken = async (
  identification: string,
  provider: string,
  name: string,
  email: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}> => {
  const ciphertext = CryptoJs.AES.encrypt(
    identification,
    process.env.INSTEAD_TOKEN || ``,
  ).toString();
  return await microService.post(`issueToken`, {
    identification: ciphertext,
    provider: provider,
    name: name,
    email: email,
  });
};

export const issueFilamentsToken = async (
  identification: string,
  provider: string,
): Promise<{
  data: {
    messages: string;
    status: string;
    payload: {
      token: string;
    };
  };
}> => {
  return await filamentService.post(
    `api/handshake`,
    {
      identification: identification,
      provider: provider,
    },
    {
      headers: { Authorization: `Bearer instead_${process.env.INSTEAD_TOKEN}` },
    },
  );
};
