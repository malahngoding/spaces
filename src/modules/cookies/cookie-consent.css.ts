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
    border: 'small',
  }),
  {
    bottom: `1rem`,
    left: `1rem`,
    padding: `1rem 2rem`,
    border: `1px solid`,
    boxShadow: `6px 6px`,
    width: `50vw`,
  },
]);

export const styledButtonAction = style([
  sprinkles({
    display: `grid`,
    gap: `medium`,
    gridTemplateColumns: {
      mobile: `1fr`,
      tablet: `1fr 1fr`,
    },
  }),
]);
