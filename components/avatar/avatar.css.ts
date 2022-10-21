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
    paddingX: `smaller`,
    paddingY: `smaller`,
  }),
  {
    color: vars.bluePrint.color.slate12,
    background: `none`,
    borderRadius: `50%`,
    border: `2px solid ${vars.bluePrint.color.slate10}`,
    ':hover': {
      cursor: `pointer`,
    },
  },
]);
