/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 *
 */
export const styledHeading = style([
  sprinkles({
    fontSize: `largest`,
    fontWeight: 900,
    marginTop: `large`,
    fontFamily: 'sans',
  }),
]);

export const styledSubHeading = style([
  sprinkles({
    fontSize: `larger`,
    fontWeight: 700,
    marginY: `small`,
    fontFamily: 'sans',
  }),
]);
