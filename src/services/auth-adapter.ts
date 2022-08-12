/**
 */
import { filamentService, microService } from '@utils/service';
import CryptoJs from 'crypto-js';
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
    .post(`issueToken`, {
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
/**
 */
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
  return await filamentService
    .post(`api/handshake`, {
      headers: { Authorization: `instead_${privateInsteadToken as string}` },
      json: {
        identification: req.identification,
        provider: req.provider,
      },
    })
    .json();
};
