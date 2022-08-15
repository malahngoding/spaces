/**
 */

import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledCookieConsent = style([
  sprinkles({
    position: `fixed`,
    background: {
      lightMode: `slate1`,
      darkMode: `slateDark1`,
    },
  }),
  {
    bottom: `1rem`,
    left: `1rem`,
    padding: `1rem 2rem`,
    border: `1px solid #000000`,
    boxShadow: `5px 5px #000000`,
    width: `50vw`,
    borderRadius: `4px`,
  },
]);
