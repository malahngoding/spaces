/**
 */
import { sprinkles } from '@styles/sprinkles.css';
import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme/index.css';
/**
 */
export const styledAvatar = style([
  sprinkles({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    alignItems: `center`,
  }),
  {
    color: vars.bluePrint.color.slate8,
    background: `none`,
    border: `none`,
    ':hover': {
      cursor: `pointer`,
    },
  },
]);
