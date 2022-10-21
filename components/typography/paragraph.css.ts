/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 *
 */
export const styledParagraph = style([
  sprinkles({
    fontSize: `regular`,
    fontWeight: 400,
    marginY: `small`,
  }),
]);

export const styledCaption = style([
  sprinkles({
    fontSize: `smaller`,
    fontWeight: 300,
    marginY: `smallest`,
  }),
]);
