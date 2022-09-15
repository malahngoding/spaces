/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';

export const styledFooter = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `regular`,
    borderWidth: `0.1875rem`,
    borderTopStyle: `solid`,
  }),
]);
