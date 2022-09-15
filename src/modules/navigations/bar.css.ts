/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 */
export const styledNavbar = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `regular`,
    borderWidth: `0.1875rem`,
    borderBottomStyle: `solid`,
  }),
  {
    position: `fixed`,
    top: 0,
    width: `calc(100vw - 100px)`,
    height: `75px`,
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);

export const styledLeft = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingLeft: `regular`,
  }),
]);

export const styledRight = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
    paddingRight: `regular`,
  }),
]);

export const styledNavLink = style([
  sprinkles({
    marginX: `large`,
    borderBottomStyle: `solid`,
    borderWidth: `0.1875rem`,
  }),
  {
    ':hover': {
      cursor: `pointer`,
      borderBottom: `0.1875rem solid black`,
    },
  },
]);
