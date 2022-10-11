/**
 */
import CryptoJs from 'crypto-js';
import { microService } from '@utils/service';
import { privateInsteadToken } from '@config/application';
/**
 */
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
    privateInsteadToken as string,
  ).toString();
  return await microService
    .post(`api/auth/token`, {
      headers: { Authorization: `instead_${privateInsteadToken as string}` },
      json: {
        identification: ciphertext,
        provider: req.provider,
        name: req.name,
        email: req.email,
      },
    })
    .json();
};
