/**
 */

import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledCookieConsent = style([
  sprinkles({
    position: `fixed`,
  }),
  {
    bottom: `3rem`,
    left: `16px`,
    padding: `1rem 2rem`,
    border: `1px solid #000000`,
    boxShadow: `5px 5px #000000`,
  },
]);
