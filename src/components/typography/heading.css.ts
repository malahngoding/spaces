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
    marginY: `medium`,
  }),
  {
    ':hover': {
      userSelect: `none`,
    },
  },
]);

export const styledSubHeading = style([
  sprinkles({
    fontSize: `medium`,
    fontWeight: 700,
    marginY: `small`,
  }),
  {
    ':hover': {
      userSelect: `none`,
    },
  },
]);
