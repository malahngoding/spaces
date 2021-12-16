import Axios from 'axios';
import CryptoJs from 'crypto-js';

const service = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_MICROS_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

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
  return await service.post(`issueToken`, {
    identification: ciphertext,
    provider: provider,
  });
};
