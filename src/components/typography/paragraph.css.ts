/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 *
 */
export const styledParagraph = style([
  sprinkles({
    fontSize: `small`,
    fontWeight: 400,
    marginY: `small`,
  }),
  {
    ':hover': {
      userSelect: `none`,
    },
  },
]);
