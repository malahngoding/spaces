import CryptoJs from 'crypto-js';

import { microService } from '@utils/service';

export const issueToken = async (
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
  const ciphertext = CryptoJs.AES.encrypt(
    identification,
    process.env.INSTEAD_TOKEN || ``,
  ).toString();
  return await microService.post(`issueToken`, {
    identification: ciphertext,
    provider: provider,
  });
};
