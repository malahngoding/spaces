/**
 */
import { publicFIlamentsUrl, publicMicrosUrl } from '@config/application';
import ky from 'ky-universal';
/**
 */
export const microService = ky
  .create({
    prefixUrl: publicMicrosUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Requested-From': 'instead-spaces',
    },
  })
  .extend({
    timeout: 30000,
  });
/**
 */
export const filamentService = ky
  .create({
    prefixUrl: publicFIlamentsUrl,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Requested-From': 'instead-spaces',
    },
  })
  .extend({
    timeout: 30000,
  });
