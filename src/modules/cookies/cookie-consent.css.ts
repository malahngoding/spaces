/**
 */

import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';

export const styledCookieConsent = style([
  sprinkles({
    position: `fixed`,
    background: {
      lightMode: `slate1`,
      darkMode: `slateDark1`,
    },
    border: 'small',
  }),
  {
    bottom: `1rem`,
    left: `1rem`,
    padding: `1rem 2rem`,
    border: `1px solid`,
    boxShadow: `5px 5px`,
    width: `50vw`,
    borderRadius: `4px`,
  },
]);
