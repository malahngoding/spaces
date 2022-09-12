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
    background: {
      darkMode: `slateDark1`,
      lightMode: `slate1`,
    },
    padding: `medium`,
    borderWidth: `0.1875rem`,
    borderTopStyle: `solid`,
    borderColor: {
      darkMode: `slateDark5`,
      lightMode: `slate5`,
    },
  }),
]);
