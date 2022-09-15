/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 *
 */
export const styledHeading = style([
  sprinkles({
    fontSize: `large`,
    fontWeight: 900,
    marginY: `regular`,
  }),
  {
    ':hover': {
      userSelect: `none`,
    },
  },
]);

export const styledSubHeading = style([
  sprinkles({
    fontSize: `regular`,
    fontWeight: 700,
    marginY: `small`,
  }),
  {
    ':hover': {
      userSelect: `none`,
    },
  },
]);
