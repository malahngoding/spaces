/**
 *
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 *
 */
export const styledSideNav = style([
  sprinkles({
    position: `fixed`,
    top: `none`,
    right: `none`,
    borderLeftStyle: `solid`,
    borderWidth: `0.1875rem`,
    height: `100vh`,
    width: `100px`,
  }),
  {
    backgroundColor: vars.bluePrint.color.slate1,
  },
]);
