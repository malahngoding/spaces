/**
 */
import ky from 'ky-universal';
import { publicMicrosUrl } from '@config/application';
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
