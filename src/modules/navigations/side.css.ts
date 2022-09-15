/**
 *
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledSideNav = style([
  {
    position: `fixed`,
    top: 0,
    right: 0,
    height: `100vh`,
    width: `100px`,
  },
  sprinkles({
    borderLeftStyle: `solid`,
    borderWidth: `0.1875rem`,
  }),
]);
