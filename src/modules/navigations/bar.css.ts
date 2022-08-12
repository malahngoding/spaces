/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
/**
 */
export const styledNavbar = style([
  {
    position: `fixed`,
    top: 0,
    width: `100vw`,
  },
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
    borderWidth: `2px`,
    borderBottomStyle: `solid`,
    borderColor: {
      darkMode: `slateDark5`,
      lightMode: `slate5`,
    },
  }),
]);

export const styledLeft = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingLeft: `medium`,
  }),
]);

export const styledRight = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingRight: `medium`,
  }),
]);
